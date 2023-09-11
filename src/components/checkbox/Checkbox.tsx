import styles from './checkbox.module.css'

export default function Checkbox({
    id,
    title,
    isCompleted,
    onChange
}: Subtask & {
    onChange: (subtask: Subtask) => void
}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({
            id,
            title,
            isCompleted: e.target.checked
        })
    }

    return (
        <label
            className={styles.checkbox_container}
        >

            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleChange}
            />

            <span>
                {title}
            </span>

        </label>
    )
}