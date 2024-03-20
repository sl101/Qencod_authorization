import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../api/services/auth";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import google from "../../assets/images/google.svg";
import github from "../../assets/images/github.svg";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [isEmailEntered, setIsEmailEntered] = useState(false);
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if (!email) setIsEmailEntered(false);
		if (!password || !email) setError("");
	}, [email, password]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (email) {
			setIsEmailEntered(true);
		}

		if (email && password) {
			//TODO: uncomment for testing
			//const email = process.env.REACT_APP_TEST_EMAIL;
			//const password = process.env.REACT_APP_TEST_PASSWORD;

			onLogin(email, password);
		}
	};

	const onLogin = async (email, password) => {
		try {
			const response = await login(email, password);
			console.log("🚀 ~ onLogin ~ response:", response);
			localStorage.setItem("token", response?.access_token);
			alert("You are signed in");
			setEmail("");
			setPassword("");
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className={styles.login_form}>
			<h1>Log in to your account</h1>
			<div className={styles.media_box}>
				<Link to="#" className={styles.media}>
					<img src={google} alt="Google icon" />
					<span>Google</span>
				</Link>
				<Link to="#" className={styles.media}>
					<img src={github} alt="GitHub icon" />
					<span>GitHub</span>
				</Link>
			</div>
			<span className={styles.decor}>or</span>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div>
					<Input
						type="email"
						value={email}
						placeholder="Work email"
						change={setEmail}
						required
					/>
				</div>
				{isEmailEntered && (
					<div className={styles.forgotpass_wrappper}>
						<Input
							type="password"
							value={password}
							placeholder="Password"
							change={setPassword}
							minLength={8}
						/>
						<div className={styles.messages}>
							<div
								className={`${styles.error} ${
									error ? styles["active"] : ""
								} || ""`}
							>
								{error ? error : "Error"}
							</div>
							<Link className={styles.forgot_pass} to="/auth/password-reset">
								Forgot your password?
							</Link>
						</div>
					</div>
				)}

				<Button type="submit" text="Log in to Qencode" />
			</form>
			<p className={styles.signup}>
				Is your company new to Qencode?
				<span>Sign up</span>
			</p>
		</div>
	);
};

export default LoginForm;
