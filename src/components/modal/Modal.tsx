import { ReactNode } from 'react'
import styles from './modal.module.css'

export default function Modal({
    children
}: {
    children: ReactNode
}) {
    return (
        <div
            className={styles.container}
        >

            <div
                className={styles.modal}
            >

                {children}

            </div>

        </div>
    )
}