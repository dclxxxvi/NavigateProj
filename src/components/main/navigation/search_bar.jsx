import styles from "./styles/search_bar.css"

function SearchBar() {

    return (
        <div class="videos_search">
            <input class="search_field" id="search_bar" name="search" placeholder="Поиск" type="search"></input>
            <button class="search_btn" id="search_btn" type="button"></button>
		</div>
    )
}

export default SearchBar