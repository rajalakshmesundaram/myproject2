import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; 

export const Login = () => {
    const [message, setMessage] = useState('');
    const [loginData, setLoginData] = useState({
       UserName : "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://miniproject2-y876.onrender.com/api/loginUser', loginData);
            setMessage(response.data.message);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error.response.data);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <h1>Login form</h1>
                <div className="mb-3">
                    <label htmlFor="UserName" className="form-label">UserName:</label>
                    <input type="email" className="form-control" id="UserName" name="UserName" value={loginData.UserName} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" value={loginData.password} onChange={handleChange} placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <h3>{message}</h3>
            </form>
            {/* Link to the Forgot Password page */}
            <Link to="/forgotpassword" className="btn btn-link">Forgot Password?</Link>
        </div>
    );
};
