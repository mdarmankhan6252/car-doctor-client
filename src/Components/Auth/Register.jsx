import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const handleCreateUser = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <h1 className="text-center font-semibold text-5xl">Create an Account</h1>
            <form onSubmit={handleCreateUser} className="max-w-xl mx-auto *:block *:w-full space-y-6 *:p-2 *:border *:border-red-300 my-10 p-6 border-2 border-red-500 rounded-xl">
                <input type="name" placeholder="Your Name" name="name"/>
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <input type="submit" value="Register" className="btn btn-secondary w-full" />
            </form>
        </div>
    );
};

export default Register;