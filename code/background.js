
/**
 * Changing Proxy to get access to Pandora Radio outside the USA.
 */
$(document).ready(function($) {
	jQuery.getScript('http://www.geoplugin.net/javascript.gp', function() {
		if (geoplugin_countryCode() != "US") {
			var config = {
				mode: "pac_script",
				pacScript: {
				data: "function FindProxyForURL(url, host) {\n" +
					  "  var proxies = [\n" +
					  "    '75.64.89.242:36081',\n" +
					  "    '70.89.83.99:3128',\n" +
					  "    '64.132.153.78:8080',\n" + 
					  "    '68.71.76.242:8082'\n" + 
					  "  ];\n" +
					  "  var number = Math.floor((Math.random() * proxies.length));\n" +
					  "  var proxy = proxies[number];\n" +
				      "  if (shExpMatch(url, 'http*://www.pandora.com/*')) {\n" + 
				      "    return 'PROXY ' + proxy + ';'\n" +
				      "  }\n" +
				      "  return 'DIRECT';\n" +
				      "}"
				}
			};
			chrome.proxy.settings.set(
				{
					value: config,
					scope: 'regular'
				},
				function() {}
			);	
		}
	});
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
