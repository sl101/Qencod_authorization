import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import "./styles/global.scss";
import PasswordResetForm from "./components/PasswordResetForm/PasswordResetForm";
import PasswordSetForm from "./components/PasswordSetForm/PasswordSetForm";
import AppIndex from "./components/AppIndex/AppIndex";
import Logo from "./components/Logo/Logo";

function App() {
	const routes = [
		{
			path: "/",
			Component: AppIndex,
		},
		{
			path: "/auth/login",
			Component: LoginForm,
		},
		{
			path: "/auth/password-reset",
			Component: PasswordResetForm,
		},
		{
			path: "/auth/password-set",
			Component: PasswordSetForm,
		},
	];

	const router = createBrowserRouter(routes, {
		basename: "/",
	});

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
