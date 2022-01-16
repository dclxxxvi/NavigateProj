import "./styles/nav_item.css"

function NavItem({tag, update}) {
    
    return (
        <div className="nav_item">
            <input 
            className="nav_btn" 
            type="radio" 
            name="tag" 
            value={tag.keywords} 
            onChange={event => update(event.target.value)}
            />
            <label className="nav_text">{tag.name}</label>
		</div>
    )
}

export default NavItem