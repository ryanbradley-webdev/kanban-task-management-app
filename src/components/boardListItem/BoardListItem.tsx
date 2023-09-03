import styles from './boardListItem.module.css'

export default function BoardListItem({
    children
}: {
    children: string
}) {
    return (
        <li
            className={styles.item}
        >

            {children}

        </li>
    )
}