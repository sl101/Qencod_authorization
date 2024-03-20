import { useState } from "react";
import styles from "./PasswordSetForm.module.scss";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const PasswordSetForm = () => {
	const navigate = useNavigate();

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords must be the same");
		} else {
			//TODO: the redirect is processed after confirmation by email
			//if (result.status === 200) {
			alert("Password successfully changed");
			navigate("/login");
			//};
		}
	};

	return (
		<div className={styles.newpassword_form}>
			<h1 className={styles.title}>Create new Password?</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label>
					<span>Password</span>
					<Input
						type="password"
						value={password}
						placeholder="Password"
						change={setPassword}
						minLength={8}
					/>
				</label>
				<label>
					<span>Confirm Password</span>
					<Input
						type="password"
						value={confirmPassword}
						placeholder="Password"
						change={setConfirmPassword}
						minLength={8}
					/>
				</label>
				<Button type="submit" text="Reset Password" />
			</form>
		</div>
	);
};

export default PasswordSetForm;
