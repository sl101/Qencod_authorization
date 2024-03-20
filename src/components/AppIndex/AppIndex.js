import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppIndex = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/auth/login");
	}, [navigate]);

	return <></>;
};

export default AppIndex;
