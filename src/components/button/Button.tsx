import styles from './button.module.css'

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    onClick: () => void
    type?: 'button' | 'submit'
    disabled?: boolean
}

export default function Button({
    children,
    onClick,
    type,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={styles.button}
            {...props}
        >

            {children}

        </button>
    )
}