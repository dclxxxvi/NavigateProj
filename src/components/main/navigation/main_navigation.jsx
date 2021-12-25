import styles from "./styles/main_navigation.css"
import NavList from "./nav_list"
import SearchBar from "./search_bar"
import VideosStack from "./videos_stack"
import { useEffect, useMemo, useState } from "react"


function MainNavigation(props) {
    const [videoData, setVideoData] = useState(props.videos);
    const [tagQuery, setTagQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [levelQuery, setLevelQuery] = useState(""); //TODO:

    console.log(props.videos);
    

    const filtredVideos = useMemo(() => {
        return [...videoData].filter((video) => {
            return getVideoInfo(video).toLowerCase().includes(searchQuery.toLowerCase()) &&
                getVideoInfo(video).toLowerCase().includes(tagQuery.toLowerCase());
        })
    },[searchQuery, tagQuery, videoData])

    function getVideoInfo(video) {
        return (video.title + " " + video.description).toLowerCase();
    }

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
                    <VideosStack videos={filtredVideos} searchQuery={searchQuery} tagQuery={tagQuery}/>
                </div>
            </div>
        </div>
    )
}

export default MainNavigation