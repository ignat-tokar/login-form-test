import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import Wrapper from "./Wrapper";

function Start({login}) {
	const navigate = useNavigate();
	const navFunc = () => {
		navigate('/login');
	}
	if(localStorage.getItem('test-login-form-auth-state')) {
		return <Welcome login={login} />
	}
	return (
		<Wrapper><button onClick={navFunc}>Start</button></Wrapper>
	);
}

export default Start;