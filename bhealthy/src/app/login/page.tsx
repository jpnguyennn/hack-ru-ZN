import { NextPage } from "next";
import Link from "next/link";

const LoginPage: NextPage = () => {
	return (
		<div>
			<h1 className="login-header">Log In</h1>
			<h1 className="usernameInput">
				<label className="label-styles">Username: </label>
				<input className="loginInput" type="text" />
			</h1>
			<br></br>
			<h1 className="passwordInput">
				<label className="label-styles">Password: </label>
				<input className="pwInput" type="text" />
			</h1>
			<input className="loggingin" type="submit" value="Submit" />
			<h1 className="toSignUp">
				<Link href="/signup">Click to sign up</Link>
			</h1>
		</div>
	);
};

export default LoginPage;
