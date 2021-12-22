import styles from './styles/level_button.css'


function LevelButton({level}) {
    const labelClass = "level_item " + level.className;
    return (
        <label className={labelClass} htmlFor={level.className}>
			<input className="level_btn" id={level.className} type='radio' name="level" value={level.name}></input>
			<div className="btn_text">{level.name}</div>
		</label>
    )
}

export default LevelButton