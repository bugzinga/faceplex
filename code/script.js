
/**
 * Indicates if we are currently in the Facebook context.
 */
fpIsFacebook = false;

/**
 * Indicates if we are currently in the VKontakte context.
 */
fpIsVkontakte = false;

/**
 * Indicates if we are currently in the Macmillan Dictionary context.
 */
fpIsMacmillan = false;

/**
 * Indicates if we are currently in the Twitter context.
 */
fpIsTwitter = false;

/**
 * Indicates if we are currently in the Pandora context.
 */
fpIsPandora = false;

/**
 * Indicates if we are currently in the Oxford Dictionaries context.
 */
fpIsOxfordDictionaries = false;

/**
 * Indicates that the elements modification process is running not to run them simultaneously.
 */
fpLocked = false;

/**
 * Custom attribute not to modify elements more than once.
 */
fpInjectedAttributeName = "fp-injected";

/**
 * Custom 'body' element attribute to store user identidier.
 */
fpUserIdAttributeName = "fp-user-id";

/**
 * Selector to find all the required information.
 */
fpSelector = null;

/**
 * Custom function that should be called after the user has clicked on 'message' icon.
 */
fpInjectionCall = null;

/**
 * Gets a URL to send a message to the user specified by his/her unique identifier.
 * Signature: fpGetMessageUrl(userId);
 */
fpGetMessageUrl = null;

/**
 * Gets a user identifier from the 'user object'.
 * Signature: fpGetUserId(user);
 */
fpGetUserId = null;

/**
 * Indicates whether or not the web page which is curently opened can be processed.
 */
fpIsSiteValid = true;

/**
 * Current user unique identifier.
 */
fpUserId = null;

/**
 * Map to store video elements which are being processed.
 */
fpVkProcessedVideoMap = { };

/**
 * VKontakte default video resolution.
 */
fpVkDefaultVideoResolution = 240;

/**
 * VKontakte video resolution map. Key is the 'hd' parameter from video data response's variables map,
 * value is the actual video resolution value.
 */
fpVkResolutionMap = {
	"0": 240,
	"1": 360,
	"2": 480,
	"3": 720
};

/**
 * Indicates that the audio elements modification process is running not to allow doing
 * the same stuff more than once (Vkontakte's audios).
 */
fpVkAudioLocked = false;

/**
 * Indicates that the audio elements modification process is running not to allow doing
 * the same stuff more than once (Macmillan Dictionary's audios).
 */
fpMacmillanAudioLocked = false;

/**
 * Chrome communication port name to communicate with Pandora's tab.
 */
fpPandoraPortName = "Faceplex Pandora Port";

/**
 * Chrome communication port to communicate with Pandora's tab.
 */
fpPandoraPort = null;

/**
 * Injected element name on Pandora web-site.
 */
fpPandoraInjectedElementId = "fpPandoraDownloadButton";

/**
 * Pandora action counter, is used to enable/disable "Download" button.
 */
fpPandoraActionCount = 0;

/**
 * The author of the current track playing on Pandora Radio.
 */
fpPandoraCurrentTrackArtist = "";

/**
 * The name of the current track playing on Pandora Radio.
 */
fpPandoraCurrentTrackTitle = "";

/**
 * The URL of the current track to download on Pandora Radio.
 */
fpPandoraCurrentTrackURL = "";

/**
 * Base64-encoded icon to show as a button for sending messages.
 */
fpMessageImage = "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAIAAAALu/iQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ\
                  bWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp\
                  bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6\
                  eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz\
                  NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo\
                  dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw\
                  dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu\
                  MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz\
                  b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N\
                  Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDRTIzQjQ4MEJBNDVFMTExQUEyRkQzRjM4NzBD\
                  Mjk4RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjAwRkM0NjQ1RjExMUUxQjcxNjk3RjRE\
                  RjBCMTMwOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjAwRkM0NTQ1RjExMUUxQjcxNjk3\
                  RjRERjBCMTMwOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3Mi\
                  PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Mzc2ODcxNEYx\
                  NDVFMTExOUNCNEM0RkZEQTIzQjUzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRTIzQjQ4\
                  MEJBNDVFMTExQUEyRkQzRjM4NzBDMjk4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRG\
                  PiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsXCvk4AAACxSURBVHjaYpxV48NAHGAB\
                  4pS6eQTVzWlKAildO6NWRddCSdsUq6J7V0/fuXwCyGACYgf/xC8fXh/aOO/ZvWv//vyCIyAXKAiU\
                  AiqAOoCZmUHb1O7T+7f3rp19/vCGsWMQUPDs/nVAUtfCmU9QGOHWf39/A0kePj49C8eXT+5DFInL\
                  KIjLKMJloUr///sFd5mYlDScgSwOM/XfH2QhEQlxTEG4A34RG66bF80kRilAgAEAmY1TOypTZtoA\
                  AAAASUVORK5CYII=";

/**
 * Base64-encoded icon to show as a button for downloading files.
 */
fpDownloadImage = "iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAYAAACgR9dcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ\
                   bWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp\
                   bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6\
                   eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz\
                   NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo\
                   dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw\
                   dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv\
                   IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS\
                   ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD\
                   cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlE\
                   PSJ4bXAuaWlkOjUzMDQxRDU4NDgwQTExRTE5ODIyOUM2MjVFQjRENUFDIiB4bXBNTTpEb2N1bWVu\
                   dElEPSJ4bXAuZGlkOjUzMDQxRDU5NDgwQTExRTE5ODIyOUM2MjVFQjRENUFDIj4gPHhtcE1NOkRl\
                   cml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTMwNDFENTY0ODBBMTFFMTk4MjI5\
                   QzYyNUVCNEQ1QUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTMwNDFENTc0ODBBMTFFMTk4\
                   MjI5QzYyNUVCNEQ1QUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1l\
                   dGE+IDw/eHBhY2tldCBlbmQ9InIiPz7QlKHJAAABj0lEQVR42mxRTUsCURQ9o+NgLaLIVUYLcZWL\
                   1kUtWpaStAoJsn/hL3HhIqxNuSwNjFZB0AdB0ipaiaQjuQhNYSbnw857OFGMFx738d49955zrjIa\
                   jSCiXi7LHAgGRdpzbDtlmeYSz/vQNC+HhlGyvr9lzUYuJ7OK/zFD8KmqaUmwiWbbML6+YFvWPhTl\
                   gP8Znp5XHPAunASyOA6GQsmQpmE2Hkd0cxPziQTgusQqW67jnDiWBR+Y9FZd191lAezhUDSCEggI\
                   EDxpzGlSX/eBCUg7BFmGAbPflw1EeM1cwYx3Tt7xML+a2XFRTIKYRGr2mJ4E8+5yOpkJeQs+MN1s\
                   CXrRtTVMRyIIhsPyfS4Ww0o2i367jZdSSbDQfbS5jgvhbP3mBkKhOgarU1NyfW/VqnTecZzKJMPu\
                   OP2822rhuVjE4ONDvg86Hdzn8/hsNATlCmXcTlwVtR1S+1WPFJ+OjqDXangsFNBtNsXEa5p2INbm\
                   0zyOHpts82R6up56KBSWadIrTazQjzMFGP0t/hFgACMj/LBiwjdaAAAAAElFTkSuQmCC";

/**
 * Initializing global variables regarding the site that has been opened.
 */
switch (document.location.host) {
	// 'Facebook'
	case "www.facebook.com":
		facebookInit();
		break;
	// 'VKontakte'
	case "vk.com":
	case "vkontakte.ru":
		vkontakteInit();
		break;
	// 'Twitter'
	case "twitter.com":
		twitterInit();
		break;
	// 'Macmillan Dictionary'
	case "www.macmillandictionary.com":
		macmillanInit();
		break;
	// 'Pandora'
	case "www.pandora.com":
		pandoraInit();
		break;
	// 'Oxford Dictionaries'
	case "oxforddictionaries.com":
		oxfordDictionariesInit();
		break;
	// Unrecognized site which is not supported by this extension
	default:
		fpIsSiteValid = false;
		break;
}

/**
 * Subscribing to DOM tree modification event if the opened site can be processed.
 */
if (fpIsSiteValid) {
	$(document).bind("DOMSubtreeModified", function() {
			if (fpLocked) {
				return;
			}
			fpLocked = true;
			if (fpIsVkontakte) {
				injectVkontakteVideoLinks();
				injectVkontakteAudioLinks();
			}
			if (fpIsMacmillan) {
				injectMacmillanAudioLinks();
			} if (fpIsPandora) {
				injectPandoraAudioLinks();
			} if (fpIsOxfordDictionaries) {
				removeOxfordDictionariesAds();
			} else {
				fpInject();
			}
			fpLocked = false;
		});
}

/**
 * Injects the extension related data into the DOM elements of the opened web page.
 */
function fpInject() {
	var users = $(fpSelector).not("[" + fpInjectedAttributeName + "]");
	if(users.length == 0) {
		return;
	}
	$.each(users, function(indexInArray, valueOfElement) {
		var user = $(valueOfElement);
		var userId = fpGetUserId(user);
		if (!userId) {
			return;
		}
		var link = $("<a>").css("margin", "2px").attr("href", fpGetMessageUrl(userId));
		var image = $("<img>").attr("src", "data:image/png;base64," + fpMessageImage);
		link.append(image);
		if (fpInjectionCall) {
			link.click(function(eventObject) {
					fpInjectionCall(userId);
				});
		}
		link.insertAfter(user);
		user.attr(fpInjectedAttributeName, "true");
	});
}

/**
 * Initializes global variables in case of processing the Facebook page.
 */
function facebookInit() {
	fpIsFacebook = true;
	// try to find the current user identifier
	var userPageUrl = ($("#pageHead #pageNav a").attr("href"));
	if (userPageUrl) {
		// try to find out whether the current user page URL looks like '${facebookUrl}/profile.php?id=${userId}&${params}'
		var position = userPageUrl.indexOf("?id=");
		if (position != -1) {
			var idStartPosition = position + 4;
			var idEndPosition = userPageUrl.indexOf("&", idStartPosition);
			idEndPosition = (idEndPosition == -1)
				? userPageUrl.length
				: idEndPosition;
			fpUserId = userPageUrl.substring(idStartPosition, idEndPosition);
		} else {
			// try to find out whether the current user page URL looks like '${facebookUrl}/${userId}'
			position = userPageUrl.indexOf("facebook.com/");
			if (position != -1) {
				var idStartPosition = position + 13;
				var idEndPosition = userPageUrl.indexOf("?", idStartPosition);
				idEndPosition = (idEndPosition == -1)
					? userPageUrl.length
					: idEndPosition;
				fpUserId = userPageUrl.substring(idStartPosition, idEndPosition);
			}
		}
	}
	// set the selector to find all the posts on the page
	fpSelector = ".storyContent a[data-hovercard*='user']:not('.actorPic')";
	// build the method to get a URL for sending messages
	fpGetMessageUrl = function(userId) {
		return ("/messages/" + userId);
	}
	// build the method to get the user identifier
	fpGetUserId = function(user) {
		var userDataUrl = user.attr("data-hovercard");
		// checking if the user data URL is of the '/ajax/hovercard/user.php?id=${userId}' format
		var position = userDataUrl.indexOf("?id=");
		if (position == -1) {
			return null;
		} else {
			// try to find out if the user page URL looks like'${facebookUrl}/profile.php?id=${userId}&${params}'
			// or '${facebookUrl}/profile.php?${params}&id=${userId}&${params}'
			var userPageUrl = user.attr("href");
			idPosition = userPageUrl.search("[?&]id=");
			var userId = null;
			var idStartPosition = null;
			var idEndPosition = null;
			if (idPosition == -1) {
				// if the template mentioned above has not been matched,
				// check whether the actual template is ${facebookUrl}/${userId}
				idPosition = userPageUrl.indexOf("facebook.com/");
				if (idPosition == -1) {
					return null;
				}
				idStartPosition = idPosition + 13;
				idEndPosition = userPageUrl.indexOf("?", idStartPosition);
			} else {
				idStartPosition = idPosition + 4;
				idEndPosition = userPageUrl.indexOf("&", idStartPosition);
			}
			idEndPosition = (idEndPosition == -1)
				? userPageUrl.length
				: idEndPosition;
			userId = userPageUrl.substring(idStartPosition, idEndPosition);
			// ignore processing data the media set has been met
			if (userId.startsWith("media/set")) {
				return null;
			}
			// processing the user depending on whether one is being the current (logged-in) user
			if (userId == fpUserId) {
				user.css("color", "#983B59");
				return null;
			} else {
				return userDataUrl.substring(position + 4);
			}
		}
	}
}

/**
 * Initializes global variables in case of processing the VKontakte page.
 */
function vkontakteInit() {
	fpIsVkontakte = true;
	vkontakteFindUserId();
	// set the selector to find all the posts on the page
	fpSelector = ".post a.author";
	// build the method to get a URL for sending messages
	fpGetMessageUrl = function(userId) {
		return ("/im?sel=" + userId);
	}
	// build the method to get the user identifier
	fpGetUserId = function(user) {
		if (!fpUserId) {
			vkontakteFindUserId();
		}
		var userId = null;
		var userDataUrl = user.attr("href");
		// try to find out whether the user page URL looks like '/id${userId}'
		var isIdUrl = userDataUrl.search("/id\\d+");
		if (isIdUrl != -1) {
			userId = userDataUrl.substring(3);
		} else {
			// try to look for the user image URL if the 'reply' takes place
			var userImageUrl = user.closest(".reply_table").find("a.reply_image img").attr("src");
			if (!userImageUrl) {
				// try to look for the user image URL if the 'post' takes place
				userImageUrl = user.closest(".post_table").find("a.post_image img").attr("src");
				if (!userImageUrl) {
					return null;
				}
			}
			// trying to find out whether we have met a user (not a group or something)
			var position = userImageUrl.indexOf("/u");
			if (position == -1) {
				return null;
			}
			var idStartPosition = position + 2;
			var idEndPosition = userImageUrl.indexOf("/", idStartPosition);
			idEndPosition = (idEndPosition == -1)
				? userImageUrl.length
				: idEndPosition;
			userId = userImageUrl.substring(idStartPosition, idEndPosition);
		}
		// processing the user depending on whether one is being the current (logged-in) user
		if (userId == fpUserId) {
			user.css("color", "#7a2b58");
			return null;
		} else {
			return userId;
		}
	}
	// remove the annoying possessive pronouns ('My', 'Мой', 'Моя', 'Мое', 'Мои') from the main menu...
	$.each($("#side_bar li *"), function(indexInArray, valueOfElement) {
			$value = $(valueOfElement).html();
			if ($value.startsWith("Мой") || $value.startsWith("Моя") || $value.startsWith("Мое") || $value.startsWith("Мои")) {
				$(valueOfElement).html($value.substring(4));
			} else if ($value.startsWith("My")) {
				$(valueOfElement).html($value.substring(3));
			}
		});
}

/**
 * Finds the active Vkontakte user identifier.
 */
function vkontakteFindUserId() {
	fpUserId = $(document.body).attr(fpUserIdAttributeName);
	if (!fpUserId) {
		var injectionScript = $("<script>");
		injectionScript.attr("type", "text/javascript");
		injectionScript.text("\
			document.body.setAttribute('" + fpUserIdAttributeName + "', vk.id);\
		");
		document.head.appendChild(injectionScript.get(0));
	}
	fpUserId = $(document.body).attr(fpUserIdAttributeName);
}

/**
 * Injects links to download video from VKontakte.
 *
 * There are two types of VKontakte video URLs which are stored on VKontakte servers:
 *
 * URL:      http://cs13473.vkontakte.ru/u111007708/video/2ecfa51c80.240.mp4
 * Template: http://cs${host}.vkontakte.ru/u${uid}/video/${vtag}.240.mp4
 *
 * URL:      http://v546.vkadre.ru/assets/videos/728954709757-103300491.vk.flv
 * Template: http://${host}/assets/videos/${vtag}${vkid}.vk.flv
 *
 * Templates are just a logical assumption how it works and matches.
 */
function injectVkontakteVideoLinks() {
	$.each($(".video_info_cont a.video_name, .results.video_results .title a").not("[" + fpInjectedAttributeName + "]"), function(indexInArray, valueOfElement) {
		var video = $(valueOfElement);
		var videoUrl = video.attr("href");
		// we assume that the video ling should look like "/video${videoId}?${params}",
		// so if it is not just go away from here
		if (!videoUrl.startsWith("/video") && !videoUrl.startsWith("video")) {
			return;
		}
		var idStartPosition = (videoUrl[0] == "/")
			? 6
			: 5;
		var idEndPosition = videoUrl.indexOf("?", idStartPosition);
		idEndPosition = (idEndPosition == -1)
			? videoUrl.length
			: idEndPosition;
		var videoId = videoUrl.substring(idStartPosition, idEndPosition);
		// if video is being processed we do not need to start doing the same
		if (fpVkProcessedVideoMap[videoId]) {
			return;
		}
		fpVkProcessedVideoMap[videoId] = true;
		var requestDataUrl = "http://" + location.hostname + "/al_video.php";
		var requestData = "act=show&al=1&autoplay=1&list&module=video&video=" + videoId;
		// inject download image with a specified link into the page
		function injectVideoLink(url) {
			var link = $("<a>").css("margin", "2px").attr("href", url);
			if (url.endsWith(".mp4") || url.endsWith(".flv")) {
				link.attr("download", video.text() + url.substr(-4));
			}
			var image = $("<img>").attr("src", "data:image/png;base64," + fpDownloadImage);
			link.append(image);
			link.insertAfter(video);
			video.attr(fpInjectedAttributeName, true);
			delete fpVkProcessedVideoMap[videoId];
		}
		function success(video) {
			return function(data, textStatus, jqXHR) {
				// try to parse the response to find video parameters there ('var vars = { ... }')
				var regexp = new RegExp("var vars = [{].*[}]");
				var value = regexp.exec(data);
				// the expected data structure has not been found
				if (!value) {
					// try to determine if we face the re-translation from YouTube
					var regexp = new RegExp("[<]iframe.*video_player.*youtube[.]com[/]embed[/](.*)[?]");
					var youtubeData = regexp.exec(data);
					if (youtubeData && youtubeData.length > 1) {
						var youtubeVideoId = youtubeData[1];
						var youtubeVideoUrl = "http://www.youtube.com/watch?v=" + youtubeVideoId;
						$.get(youtubeVideoUrl, function(data, textStatus, jqXHR) {
								var options = data.match("(?:amp;)url_encoded_fmt_stream_map=(.*?)(?:amp;)");
								var separators = [ "%2C", "%26", "%3D" ];
								if (!options) {
									options = data.match(/"url_encoded_fmt_stream_map": "(.*?)"/);
									separators = [ ",", "&", "=" ];
								}
								if (options && options.length > 1) {
									ulrsData = options[1];
									var urls = ulrsData.split(separators[0]);
									for (var i = 0; i <= urls.length; i++) {
										var url = urls[i].replace("\\u0026", "&");
										var params = url.split(separators[1]);
										for (var k = 0; k <= params.length; k++) {
											param = params[k].split(separators[2]);
											if ((param.length == 2) && (param[0] == "url")) {
												var actualUrl = unescape(unescape(param[1]));
												var title = encodeURI(video.text());
												actualUrl += "&title=" + title;
												injectVideoLink(actualUrl);
												return;
											}
										}
									}
								}
							});
					} else {
						delete fpVkProcessedVideoMap[videoId];
						video.attr(fpInjectedAttributeName, true);
					}
					return;
				}
				var params = $.parseJSON(value.toString().substring(11));
				// we have no idea how to process video parameters if a video is external or hosted not on VKontakte
				if ((params.is_ext != 0) || (params.is_vk == 0)) {
					video.attr(fpInjectedAttributeName, true);
					delete fpVkProcessedVideoMap[videoId];
					return;
				}
				// build the video URL
				var url = "http://";
				// whether or not there is an identifier of a user who posted the video
				if (params.uid != 0) {
					url += "cs" + params.host + "." + location.hostname + "/u" + params.uid + "/video/" + params.vtag;
				} else {
					url += params.host + "/assets/videos/" + params.vtag + params.vkid;
				}
				// try to find out the best resolution of the video
				var resolution = fpVkResolutionMap[params.hd];
				if (!resolution) {
					resolution = fpVkDefaultVideoResolution;
				}
				// whether or not we deal with 'flv' media format
				if (params.no_flv) {
					url += "." + resolution + ".mp4";
				} else {
					// if we have no user identifier it seems we have to add '.vk' before the extension
					if (params.uid == 0) {
						url += ".vk";
					}
					url += ".flv";
				}
				injectVideoLink(url);
			}
		}
		$.post(requestDataUrl, requestData, success(video));
	});
}

/**
 * Injects links to download audio from VKontakte.
 */
function injectVkontakteAudioLinks() {
	if (fpVkAudioLocked) {
		return;
	}
	fpVkAudioLocked = true;
	$.each($(".play_btn input, .audio input").not("[" + fpInjectedAttributeName + "]"), function(indexInArray, valueOfElement) {
		var audio = $(valueOfElement);
		var audioId = audio.attr("id");
		var audioValue = audio.attr("value");
		var urlEndPosition = audioValue.indexOf(",");
		urlEndPosition = (urlEndPosition == -1)
			? audioValue.length
			: urlEndPosition;
		var url = audioValue.substring(0, urlEndPosition);
		var audioTitle = audio.closest("tr").find(".title_wrap b, .audio_title_wrap b");
		var link = $("<a>").css("margin", "2px").attr("href", url);
		if (url.endsWith(".mp3")) {
			var audioTitleName = audioTitle.siblings(".title").find("a");
			if (audioTitleName) {
				link.attr("download", audioTitle.text() + " - " + audioTitleName.text() + ".mp3");
			}
		}
		var image = $("<img>").attr("src", "data:image/png;base64," + fpDownloadImage);
		link.append(image);
		link.insertAfter(audioTitle);
		audio.attr(fpInjectedAttributeName, true);
	});
	fpVkAudioLocked = false;
}

/**
 * Initializes global variables in case of processing the Twitter page.
 */
function twitterInit() {
	fpIsTwitter = true;
	// try to find the current user identifier
	var user = $(".js-mini-current-user").first();
	if (user.length > 0) {
		fpUserId = user.attr("data-user-id");
	}
	// set the selector to find all the posts on the page
	fpSelector = ".stream .stream-item-footer .tweet-actions .js-toggle-fav";
	// build the method to get a URL for sending messages
	fpGetMessageUrl = function(user) {
		return "javascript:void()";
	}
	// build the method to get the user identifier
	fpGetUserId = function(user) {
		return user.closest(".content").find(".stream-item-header .js-user-profile-link").attr("data-user-id");
	}
	// build the method to create a new 'tweet'
	fpInjectionCall = function(userId) {
		var injectionScript = $("<script>");
		injectionScript.attr("type", "text/javascript");
		injectionScript.text("\
			var userId = " + userId + ";\n\
			twttr.API.User.find(userId, function(user) {\n\n\
					new twttr.widget.TweetDialog({\n\
						template: { title: 'Mention ' + user.screenName },\n\
						draggable: true,\n\
						defaultContent: '@' + user.screenName + ' ',\n\
						origin: 'profile-actions-dropdown-mention'\n\
					}).open().focus();\n\
				});\
		");
		document.head.appendChild(injectionScript.get(0));
	}
}

/**
 * Initializes global variables in case of processing the Macmillan Dictionary page.
 */
function macmillanInit() {
	fpIsMacmillan = true;
}

/**
 * Injects links to download pronunciation audio from Macmillan Dictionary.
 */
function injectMacmillanAudioLinks() {
	if (fpMacmillanAudioLocked) {
		return;
	}
	fpMacmillanAudioLocked = true;
	$.each($(".PRONS img").not("[" + fpInjectedAttributeName + "]"), function(indexInArray, valueOfElement) {
		var pronunciation = $(valueOfElement);
		var clickHandler = pronunciation.attr("onclick");
		if (!clickHandler) {
			return;
		}
		var flashPaths = clickHandler.toString().match(".*?playSoundFromFlash.*?'(.*?)'.*'(.*?)'");
		if (!flashPaths || (flashPaths.length < 3)) {
			return;
		}
		var url = flashPaths[2];
		var link = $("<a>").attr("href", url);
		if (url.endsWith(".mp3")) {
			var word = $(this).closest(".HEAD").find("#headword .BASE-FORM .BASE");
			if (word) {
				link.attr("download", word.text() + ".mp3");
			}
		}
		var image = $("<img>").attr("src", "data:image/png;base64," + fpDownloadImage);
		link.append(image);
		link.insertAfter(pronunciation);
		pronunciation.attr(fpInjectedAttributeName, true);
	});
	fpMacmillanAudioLocked = false;
}

/**
 * Initializes global variables in case of processing the Pandora page.
 */
function pandoraInit() {
	fpIsPandora = true;
	fpPandoraPort = chrome.extension.connect(
		{
			name: fpPandoraPortName
		});
}

/**
 * Injects links to download audio from Pandora internet radio web-site.
 */
function injectPandoraAudioLinks() {
	var artist = $(".info .playerBarArtist");
	var title = $(".info .playerBarSong");
	if ((artist.length > 0) && (title.length > 0)) {
		var artistName = artist.text();
		var titleName = title.text();
		if (artistName.isEmpty() || titleName.isEmpty()) {
			return;
		}
		if (titleName == "audioad") {
			fpPandoraActionCount = 0;
			return;
		}
		var trackName = artistName + " - " + titleName + ".m4a";
		var pandora = getPandoraInjectedButton();
		var link = pandora.find("a");
		if (trackName == link.attr("download")) {
			return;
		}
		if (artistName != fpPandoraCurrentTrackArtist) {
			fpPandoraCurrentTrackArtist = artistName;
			fpPandoraActionCount++;
		}
		if (titleName != fpPandoraCurrentTrackTitle) {
			fpPandoraCurrentTrackTitle = titleName;
			fpPandoraActionCount++;
		}
		if ((fpPandoraCurrentTrackArtist == artistName) && (fpPandoraCurrentTrackTitle == titleName)) {
			link.attr("download", trackName);
		}
		checkPandoraInjectedButtonStatus();
	}
}

/**
 * Subscribes to Chrome communication port to handle Pandora audio URLs.
 */
fpPandoraPort.onMessage.addListener(function(msg) {
	if (msg.url) {
		if (msg.url == fpPandoraCurrentTrackURL) {
			return;
		}
		fpPandoraCurrentTrackURL = msg.url;
		var pandora = getPandoraInjectedButton();
		var link = pandora.find("a");
		link.attr("href", fpPandoraCurrentTrackURL);
		fpPandoraActionCount++;
		checkPandoraInjectedButtonStatus();
	}
});

/**
 * Returns Pandora "Download" button (creates it if there is no such a button yet).
 */
function getPandoraInjectedButton() {
	var pandora = $("#" + fpPandoraInjectedElementId);
	if (pandora.length == 0) {
		var link = $("<a>");
		var pandora = $("<div>").attr("id", fpPandoraInjectedElementId);
		pandora.append(link);
		pandora.attr("class", "fpPandoraButtonDisabled");
		pandora.insertAfter($(".skipButton"));
		$(".buttons").css("width", "260px");
	}
	return pandora;
}

/**
 * Enables/disables Pandora "Download" button.
 */
function checkPandoraInjectedButtonStatus() {
	var pandora = getPandoraInjectedButton();
	fpPandoraActionCount %= 3;
	pandora.attr("class", (fpPandoraActionCount == 0) ? "fpPandoraDownloadButton" : "fpPandoraButtonDisabled");
}

/**
 * Initializes global variables in case of processing the Oxford Dictionaries page.
 */
function oxfordDictionariesInit() {
	fpIsOxfordDictionaries = true;
}

/**
 * Removes advertisements on the Oxford Dictionaries web-site.
 */
function removeOxfordDictionariesAds() {
	$("[id*='ad'][id*='Home']").remove();
	$("[id*='ad'][id*='Entry']").remove();
	$("[id*='ad'][id*='Spellchecker']").remove();
	$("[id*='ad'][id*='Content']").remove();		
	$("[id*='AdColumn']").remove();
	$("div").filter(function() {
		return $(this).css('z-index') == '9998';
	}).remove();
	$("#layoutTable").width("100%");
};
