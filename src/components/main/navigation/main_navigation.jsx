import styles from "./styles/main_navigation.css"
import NavList from "./nav_list"
import SearchBar from "./search_bar"
import VideosStack from "./videos_stack"

function MainNavigation(props) {

    return (
        <div className="container">
	        <div className="main_nav">
                <div className="institutes_nav">
                    <h1>Институт</h1>
                        <NavList tagList={props.institutes}/>
                    <h2>Дополнительно</h2>
                        <NavList tagList={props.extra}/>
                </div>
                <div class="videos_nav">
                    <SearchBar />
                    <VideosStack videos={props.videos}/>
                </div>
            </div>
        </div>
    )
}

export default MainNavigation