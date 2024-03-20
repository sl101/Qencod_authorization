import logo from "../../assets/images/qencode.svg";
import styles from "./Logo.module.scss"

const Logo = () => {
	return (
		<div className={styles.logo_wrapper}>
			<img src={logo} alt="Logo Qencode icon" />
		</div>
	);
};

export default Logo;
