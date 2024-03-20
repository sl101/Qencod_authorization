import eye from "../../../assets/images/eye.svg";
import { ReactSVG } from "react-svg";
import styles from "./Input.module.scss";
import { useState } from "react";

const Input = ({ type, value, placeholder, minLength, change }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.input_wrapper}>
			<input
				className={styles.input}
				type={isOpen ? "text" : type}
				value={value}
				onChange={(e) => change(e.target.value)}
				placeholder={placeholder}
				minLength={minLength}
				required
			/>
			{type === "password" ? (
				<ReactSVG
					className={`${styles.eye} ${isOpen ? styles.open : ""}`}
					src={eye}
					alt="icon eye"
					onClick={() => setIsOpen(!isOpen)}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default Input;
