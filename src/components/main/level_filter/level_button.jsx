import styles from './styles/level_button.css'


function LevelButton({level}) {
    return (
        <label className={`level_item ${level.className}`} htmlFor={level.className}>
			<input className="level_btn" id={level.className} type='radio' name="level" value={level.name}></input>
			<div className="btn_text">{level.name}</div>
		</label>
    )
}

export default LevelButton