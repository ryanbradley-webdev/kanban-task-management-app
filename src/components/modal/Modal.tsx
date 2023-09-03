import { ReactNode } from 'react'
import styles from './modal.module.css'
import DeleteIcon from '../../assets/DeleteIcon'

export default function Modal({
    children,
    closeModal
}: {
    children: ReactNode
    closeModal: () => void
}) {
    return (
        <div
            className={styles.container}
        >

            <div
                className={styles.modal}
            >
                <button
                    onClick={closeModal}
                >
                    <DeleteIcon />
                </button>

                {children}

            </div>

        </div>
    )
}