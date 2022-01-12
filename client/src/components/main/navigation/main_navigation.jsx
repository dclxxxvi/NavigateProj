import styles from "./styles/main_navigation.css"
import NavList from "./nav_list"
import SearchBar from "./search_bar"
import VideosStack from "./videos_stack"
import LevelFilter from "../level_filter/level_filter"
import { useMemo, useState } from "react"


function MainNavigation(props) {
    const [tagQuery, setTagQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [levelQuery, setLevelQuery] = useState("");

    const filtredVideos = useMemo(() => {
        return [...props.videos].filter((video) => {
            return getVideoInfo(video).includes(searchQuery.toLowerCase()) &&
                getVideoInfo(video).includes(tagQuery.toLowerCase()) &&
                getVideoInfo(video).includes(levelQuery.toLowerCase());
        })
    },[searchQuery, tagQuery, levelQuery, props.videos])

    function getVideoInfo(video) {
        return (video.title + " " + video.description).toLowerCase();
    }

    // function findMatches(video, query) {
    //     let videoInfo = getVideoInfo(video);
    //     query.split(',').forEach(element => {
    //         if (videoInfo.includes(element.toLowerCase()))
    //         {
    //             return true;
    //         }
    //     });
    //     return false;
    // }

    return (
        <div className="container">
            <LevelFilter levels={props.levels} update={setLevelQuery}/>
	        <div className="main_nav">
                <div className="institutes_nav">
                    <h1>Институт</h1>
                        <NavList tagList={props.institutes} update={setTagQuery}/>
                    <h2>Дополнительно</h2>
                        <NavList tagList={props.extra} update={setTagQuery}/>
                </div>
                <div className="videos_nav">
                    <SearchBar update={setSearchQuery}/>
                    <VideosStack videos={filtredVideos} levelQuery={levelQuery} searchQuery={searchQuery} tagQuery={tagQuery}/>
                </div>
            </div>
        </div>
    )
}

export default MainNavigation