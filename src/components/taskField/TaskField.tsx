import DeleteIcon from "../../assets/DeleteIcon"
import styles from './taskField.module.css'

export default function TaskField({
    id,
    isCompleted,
    title,
    updateSubtask
}: Subtask & {
    updateSubtask: (newSubtask: Subtask) => void
}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        updateSubtask({
            id,
            isCompleted,
            title: value
        })
    }

    return (
        <label
            className={styles.field}
        >

            <input
                type="text"
                placeholder='e.g. Make coffee'
                value={title}
                onChange={handleChange}
            />

            <DeleteIcon />

        </label>
    )
}