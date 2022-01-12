import styles from './main.css'
import * as tags from '../../constants/tags'
import MainNavigation from './navigation/main_navigation'
import $ from 'jquery'
import { useEffect } from 'react/cjs/react.development'
import { useState } from 'react'

function Main() {

    const [videoData, setVideoData] = useState([]);

    function getUrl(method, params) {
        if (!method) throw new Error('Invalid method');
        params = params || {};
        params['access_token'] = 'aac586bea8e957f9651ed5a6aaed2262465e7dca77b542ea6b30eb6959e709d164b75b210ce8957dba897';
        return "https://api.vk.com/method/" + method + "?" + $.param(params);
    }

    function getOffsetUrl(offset) {
        return getUrl('video.get', {v: 5.81, owner_id: -22301031, offset: offset, count: 200})
    }

    async function getVideoArr(count) {
        let videos = [];
        for (let i = 0; i < Math.ceil(count / 200) ; i++)
        {
            await $.ajax({
                url: getOffsetUrl(i * 200),
                method: "GET",
                dataType: "JSONP",
                success: function(d) {
                    videos.push(...d.response.items);
                }
            });
        }
        return videos;
    }

    useEffect(() => {
        $.ajax({
            url: getOffsetUrl(0),
            method: "GET",
            dataType: "JSONP",
            success: function(data) {
                if (data.error) {
                    console.log(data.error);
                    return;
                }
                getVideoArr(data.response.count)
                .then((videos) => setVideoData(videos.sort((a,b) => b.date - a.date)));
            }
        });
    }, [])

    return (
        <div className="main">
            <MainNavigation 
            institutes={tags.institutes} 
            extra={tags.extra} 
            levels={tags.levels}
            videos={videoData}
            update={setVideoData}
            />
        </div>
    )
}

export default Main