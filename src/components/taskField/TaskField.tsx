import DeleteIcon from "../../assets/DeleteIcon"
import styles from './taskField.module.css'

export default function TaskField({
    value
}: {
    value: string
}) {
    return (
        <label
            className={styles.field}
        >

            <input
                type="text"
                placeholder='e.g. Make coffee'
                value={value}
            />

            <DeleteIcon />

        </label>
    )
}