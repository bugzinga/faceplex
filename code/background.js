
/**
 * Changing Proxy to get access to Pandora Radio outside the USA.
 */
$(document).ready(function($) {
		$.getScript('http://www.geoplugin.net/javascript.gp', function() {
				if (geoplugin_countryCode() != "US") {
					fixPandoraConnection();
					chrome.webRequest.onBeforeRequest.addListener(
						function(details) {
							// TODO: Probably the logic should be changed to have something here as well
						},
						{
							urls: ["*://*.pandora.com/*"],
							types: [ "main_frame" ]
						});
					chrome.webRequest.onCompleted.addListener(
						function(details) {
							if (details.statusCode != 200) {
								fixPandoraConnection(false);
							}
						},
						{
							urls: ["*://*.pandora.com/*"],
							types: [ "main_frame" ]
						});
					chrome.webRequest.onErrorOccurred.addListener(
						function(details) {
							fixPandoraConnection(false);
						},
						{
							urls: ["*://*.pandora.com/*"],
							types: [ "main_frame" ]
						});
					chrome.webRequest.onBeforeRedirect.addListener(
						function(details) {
							if (details.redirectUrl.endsWith("restricted")) {
								fixPandoraConnection(false);
							}
						},
						{
							urls: ["*://*.pandora.com/*"],
							types: [ "main_frame" ]
						});
				}
			})
	});

/**
 * Chrome communication port name to communicate with Pandora's tab.
 */
fpPandoraPortName = "Faceplex Pandora Port";

/**
 * Chrome communication ports to communicate with Pandora's tabs.
 */
fpPandoraPorts = [];

/**
 * Network incoming traffic listener.
 */
chrome.webRequest.onHeadersReceived.addListener(
	function(details) {
		fpPandoraPorts.forEach(function(port) {
				port.postMessage(
					{
						url: details.url
					})
			});
	},
	{
		urls: ["*://*.pandora.com/access*"],
		types: [ "object" ]
	}
);

/**
 * Storing the communication ports of Pandora's tabs.
 */
chrome.extension.onConnect.addListener(function(port) {
		if (port.name == fpPandoraPortName) {
			fpPandoraPorts.push(port);
			port.onDisconnect.addListener(function(port) {
					var index = fpPandoraPorts.indexOf(port);
					if (index != -1) {
						fpPandoraPorts.splice(index, 1);
					}
			});
		}
	});

/**
 * Fixes Pandora's restriction of usage only from the USA.
 * Looks for anonymous proxies and applies them if the user tries to get Pandora.
 */
function fixPandoraConnection(async) {
	$.ajax(
		"http://hidemyass.com/proxy-list/",
		{
			async  : (async == undefined) ? true : async,
			type   : "POST",
			data   : {
				         c      : [ "United States" ],
				         pr     : [ 0, 1 ],
				         a      : [ 3, 4 ],
				         sp     : [ 3 ],
				         ct     : [ 3 ],
				         s      : 0,
				         o      : 0,
				         pp     : 2,
				         sortBy : "date"
				     },
			complete : function(jqXHR, textStatus) {
				           var proxies = [];
				           $.each($(jqXHR.responseText).find("#listtable tbody tr"), function(indexInArray, valueOfElement) {
								    var ipAddress = $(valueOfElement).find("td")[1];
								    var ipPort = $(valueOfElement).find("td")[2];
								    var visibleClasses = [];
								    var proxy = $(ipAddress).children("span").contents().filter(function() {
										    var nodeName = this.nodeName.toLowerCase();
										    if (nodeName == "style") {
											    var styles = $(this).text().trim();
											    visibleClasses = styles.match(/((?=.)(\w*)(?={display:i))/g).filter(function(value) { return !value.isEmpty(); });
											    return false;
										    }
										    var elementClass = $(this).attr("class");
										    var classMatch = false;
										    if (elementClass != undefined) {
											    $.each(visibleClasses, function(indexInArray, valueOfElement) {
													    classMatch = elementClass.contains(valueOfElement);
													    return !classMatch;
												    });
										    }
										    return (nodeName == "#text") || classMatch || ($(this).css("display") == "inline")
											    || !isNaN(parseInt(elementClass)) || ($(this).text() == ".");
									    }).text() + ":" + $(ipPort).text().trim();
								    proxies.push("'" + proxy + "'");
					            });
					        var number = Math.floor((Math.random() * proxies.length));
					        var proxy = proxies[number];
	           				var config = {
								mode: "pac_script",
								pacScript: {
									data: "function FindProxyForURL(url, host) {\n" +
										  "    var proxy = [ " + proxy + " ];\n" +
									      "    if (shExpMatch(url, 'http*://www.pandora.com/*')) {\n" + 
									      "        return 'PROXY ' + proxy + ';'\n" +
									      "    }\n" +
									      "    return 'DIRECT';\n" +
									      "}"
								}
							};
							chrome.proxy.settings.set(
								{
									value: config,
									scope: "regular"
								},
								function() {}
							);
				       }
		});
}
