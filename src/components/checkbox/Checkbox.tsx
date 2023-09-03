import styles from './checkbox.module.css'

export default function Checkbox({
    title,
    isCompleted
}: Subtask) {
    return (
        <label
            className={styles.checkbox_container}
        >

            <input
                type="checkbox"
                checked={isCompleted}
            />

            <span>
                {title}
            </span>

        </label>
    )
}