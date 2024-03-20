import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppIndex = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/auth/login");
	}, []);

	return <></>;
};

export default AppIndex;
