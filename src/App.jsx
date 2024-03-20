import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import LoginForm from "./components/LoginForm/LoginForm";
import "./styles/global.scss";
import PasswordResetForm from "./components/PasswordResetForm/PasswordResetForm";
import PasswordSetForm from "./components/PasswordSetForm/PasswordSetForm";
import { useEffect } from "react";

function App() {
	const routes = [
		{
			path: "/login",
			Component: LoginForm,
		},
		{
			path: "/password-reset",
			Component: PasswordResetForm,
		},
		{
			path: "/password-set",
			Component: PasswordSetForm,
		},
	];
	const router = createBrowserRouter(routes, {
		basename: "/auth",
	});

	useEffect(() => {
		if (window.location.pathname === "/") window.location.href = "/auth/login";
	}, []);

	return (
		<div className="app">
			<div className="wrapper">
				<Logo />
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
