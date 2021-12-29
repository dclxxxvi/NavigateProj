import styles from './styles/level_filter.css'
import LevelButton from './level_button'

function LevelFilter(props) {
    return (
        <div className="level_menu">
            {props.levels.map(level => {
                return <LevelButton level={level} key={level.name} update={props.update}/>
            })}
        </div>
    )
}

export default LevelFilter