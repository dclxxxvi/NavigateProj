import styles from "./styles/nav_item.css"

function NavItem({tag}) {

    return (
        <div className="nav_item">
            <input className="nav_btn" type="radio" name="tag" value={tag.name}></input>
            <label className="nav_text">{tag.name}</label>
		</div>
    )
}

export default NavItem