//ссылка для получения токена
//https://oauth.vk.com/authorize?client_id=8007992&display=page&redirect_uri=&scope=video&response_type=token&v=5.52

import $ from 'jquery';


function getUrl(method, params) {
	if (!method) throw new Error('Invalid method');
	params = params || {};
	params['access_token'] = '56dd078dcf085ff345d072f6b8fefea246018efc5b7f32b1c828e65321948bd04d75056517ab84d25f339';
	return "https://api.vk.com/method/" + method + "?" + $.param(params);
}

function sendRequest() {
    let videos = [];
	$.ajax({
		url: getUrl('video.get', {v: 5.81, owner_id: -22301031, count: 20}),
		method: "GET",
		dataType: "JSONP",
		success: function(data) {
            videos.push(...data.response.items)
        }
	});
    return videos
}

export const videos = sendRequest();

