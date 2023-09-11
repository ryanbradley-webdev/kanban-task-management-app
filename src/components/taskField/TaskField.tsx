import DeleteIcon from "../../assets/DeleteIcon"
import styles from './taskField.module.css'

export default function TaskField({
    id,
    isCompleted,
    title,
    updateSubtask,
    deleteSubtask
}: Subtask & {
    updateSubtask: (newSubtask: Subtask) => void
    deleteSubtask: (id: string) => void
}) {
    console.log(id)

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

            <button
                onClick={() => deleteSubtask(id)}
                className={styles.delete_btn}
            >

                <DeleteIcon />

            </button>

        </label>
    )
}