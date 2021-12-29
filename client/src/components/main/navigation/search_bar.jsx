import "./styles/search_bar.css"

function SearchBar({update}) {

    return (
        <div className="videos_search">
            <input 
            className="search_field" 
            id="search_bar" 
            name="search" 
            placeholder="Поиск" 
            type="search"
            onChange={event => update(event.target.value)}/>
            <button className="search_btn" id="search_btn" type="button"></button>
		</div>
    )
}

export default SearchBar