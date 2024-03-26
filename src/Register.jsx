import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate= useNavigate()
    const[message , setMessage]=useState('')
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        UserName:"",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://miniproject2-y876.onrender.com/api/createUser', formData)
            .then((res)=>setMessage(res.data.message))
            
            console.log(response.data);

            
        } catch (error) {
            console.error('Error:', error);
        }
        navigate('/login')
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <h1>Registration form</h1>
                <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">FirstName:</label>
                    <input type="text" className="form-control" id="username" name="FirstName" value={formData.FirstName} onChange={handleChange} placeholder="FirstName" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="LastName" className="form-label">LastName:</label>
                    <input type="text" className="form-control" id="LastName" name="LastName" value={formData.LastName} onChange={handleChange} placeholder="LastName" required />
                </div>
                 <div className="mb-3">
                    <label htmlFor="UserName" className="form-label">UserName:</label>
                    <input type="email" className="form-control" id="UserName" name="UserName" value={formData.UserName} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                 <h3>{message}</h3>
            </form>
            
        </div>
    );
};
