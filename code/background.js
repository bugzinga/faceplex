
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
				      "  if (shExpMatch(url, 'http*://www.pandora.com/*')) {\n" + 
				      "    return 'PROXY 50.22.104.219:80; PROXY 209.147.173.66:8080; PROXY 107.22.50.230:80; PROXY 107.20.164.163:80; PROXY 216.18.231.82:9090';\n" +
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
 * Chrome communication port to communicate with Pandora's tab.
 */
fpPandoraPort = null;

/**
 * Network incoming traffic listener.
 */
chrome.webRequest.onHeadersReceived.addListener(
	function(details) {
		if (fpPandoraPort) {
			fpPandoraPort.postMessage(
				{
					url: details.url
				});
		}
	},
	{
		urls: ["*://*.pandora.com/access*"],
		types: [ "object" ]
	}
);

/**
 * Storing the communication port of Pandora's tab.
 */
chrome.extension.onConnect.addListener(function(port) {
		if (port.name == fpPandoraPortName) {
			fpPandoraPort = port;
		}
	});
