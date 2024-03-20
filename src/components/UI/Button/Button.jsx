import styles from "./Button.module.scss";

const Button = ({ text, type, context, onClick }) => {
	return (
		<button
			className={`${styles.button} ${context ? styles[context] : ""}`}
			type={type}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
