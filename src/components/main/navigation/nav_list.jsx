import styles from "./styles/nav_list.css"
import NavItem from "./nav_item"

function NavList(props) {

    return (
        <div class="nav_inner">
			{props.tagList.map(tag => {
                    return <NavItem tag={tag} key={tag.name}/>
                })}
        </div>
    )
}

export default NavList