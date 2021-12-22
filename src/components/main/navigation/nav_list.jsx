import styles from "./styles/nav_list.css"
import NavItem from "./nav_item"

function NavList({tagList, update}) {


    return (
        <div className="nav_inner">
			{tagList.map(tag => {
                return <NavItem update={update} tag={tag} key={tag.name}/>
            })}
        </div>
    )
}

export default NavList