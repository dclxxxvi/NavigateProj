import styles from "./styles/main_navigation.css"
import NavList from "./nav_list"
import SearchBar from "./search_bar"
import VideosStack from "./videos_stack"
import { useEffect, useMemo, useState } from "react"


function MainNavigation(props) {


    const [videoData, setVideoData] = useState(props.videos);
    const [tagQuery, setTagQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // function updateFilter(text) {
    //     setFilterText(text);
    // }

    const filtredVideos = useMemo(() => {
        console.log(searchQuery);
        return [...videoData].filter((video) => {
            return getVideoInfo(video).toLowerCase().includes(searchQuery.toLowerCase()) &&
            getVideoInfo(video).toLowerCase().includes(tagQuery.toLowerCase());
        })
    },[searchQuery, tagQuery, videoData])

    // function filterVideos() {
    //     setVideoData(props.videos.filter((video) => {
    //         let videoInfo = getVideoInfo(video);
    //         console.log(filterText);
    //         console.log(videoInfo);
    //         return videoInfo.includes(filterText.toLowerCase());
    //     }));
    // }

    // function filterVideos(text) {
    //     setVideoData(props.videos.filter((video) => {
    //         let videoInfo = getVideoInfo(video);
    //         return videoInfo.includes(text.toLowerCase());
    //     }));
    // }
    function includeFilter() {
        
    }

    function getVideoInfo(video) {
        return (video.title + " " + video.description).toLowerCase();
    }

    // function filterVideoData(t) {
    //     setVideoData(videoData.filter(video => getVideoInfo(video).includes(t.toLowerCase())));
    //     setTag(t);
    // }

    return (
        <div className="container">
	        <div className="main_nav">
                <div className="institutes_nav">
                    <h1>Институт</h1>
                        <NavList tagList={props.institutes} update={setTagQuery}/>
                    <h2>Дополнительно</h2>
                        <NavList tagList={props.extra} update={setTagQuery}/>
                </div>
                <div className="videos_nav">
                    <SearchBar update={setSearchQuery}/>
                    <VideosStack videos={filtredVideos}/>
                </div>
            </div>
        </div>
    )
}

export default MainNavigation