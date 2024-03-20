import { useState } from "react";
import Input from "../UI/Input/Input";
import styles from "./PasswordResetForm.module.scss";
import Button from "../UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { password_reset } from "../../api/services/auth";

const PasswordResetForm = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const body = {
			email,
			redirect_url: `${process.env.REACT_APP_BASE_URL}/password-set`,
		};
		const result = password_reset(body);
		//TODO: the redirect is processed after confirmation by email
		//if (result.status === 200) {
		navigate("/password-set");
		//};
	};

	return (
		<div className={styles.reset_form}>
			<h1 className={styles.title}>Forgot Password?</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div>
					<Input
						type="email"
						value={email}
						placeholder="Enter your email"
						change={setEmail}
						required
					/>
				</div>
				<Button type="submit" text="Send" />
				<Link to="/login">
					<Button type="button" text="Cancel" context="cancel" />
				</Link>
			</form>
		</div>
	);
};

export default PasswordResetForm;
