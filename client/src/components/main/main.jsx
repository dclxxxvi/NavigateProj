import styles from './main.css'
import * as tags from '../../constants/tags'
import MainNavigation from './navigation/main_navigation'
import React, {useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchVideos} from "../../http/videoAPI";

const Main = observer (() => {
    const {video} = useContext(Context);
    const [videoData, setVideoData] = useState([]);


    //реализовать без паузы..
    useEffect(() => { 
        fetchVideos().then(data => {video.setVideos(data);})
        .then(setTimeout(() => {setVideoData(video.videos)}, 200))
    ;}, [])     

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
});

export default Main