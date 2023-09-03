import styles from './column.module.css'

export default function Column({
    name,
    tasks
}: Column) {
    return (
        <section
            className={styles.column}
        >

            {name}

            {tasks.length}

        </section>
    )
}