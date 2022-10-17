import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

function Login({login, password}) {
	const [loginValue, setLoginValue] = useState('');
	const [passValue, setPassValue] = useState('');
	const navigate = useNavigate();
	const onLoginChange = (event) => {
		setLoginValue(event.target.value);
	}
	const onPassChange = (event) => {
		setPassValue(event.target.value);
	}
	const navFunc = () => {
		if(loginValue === login && passValue === password){
			localStorage.setItem('test-login-form-auth-state', true);
			alert('You are authorized');
			navigate('/welcome');			
		}else{
			alert('Login or password is incorrect');
		}
	}
	return (
		<Wrapper>
			<input type="text" value={loginValue} onChange={onLoginChange} placeholder={login}/>
			<input type="text" value={passValue} onChange={onPassChange} placeholder={password}/>
			<button onClick={navFunc}>Login</button>
		</Wrapper>
	);
}

export default Login;