import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const handleLoginUser = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <h1 className="text-center font-semibold text-5xl">Login User</h1>
            <form onSubmit={handleLoginUser} className="max-w-xl mx-auto *:block *:w-full space-y-6 *:p-2 *:border *:border-red-300 my-10 p-6 border-2 border-red-500 rounded-xl">
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <input type="submit" value="Login" className="btn btn-secondary w-full" />
            </form>
        </div>
    );
};

export default Login;