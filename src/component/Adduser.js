import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const Adduser = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[role,setRole]=useState('staff');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const userobj={name,email,phone,role};
        dispatch(FunctionAddUser(userobj));
        navigate('/user')
        window.alert("user added successfully!")
        console.log("userobj",userobj);
    }

    return ( 
        <div>
        <form onSubmit={handleSubmit}>
            <div><h2>Add User</h2></div>
            <div>
                <table border={2}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Role</td>
                            <td>Email</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='text' value={name} onChange={e=>setName(e.target.value)}></input></td>
                            <td><select value={role} onChange={e=>setRole(e.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="staff">Staff</option>
                            </select></td>
                            <td><input type='email' value={email} onChange={e=>setEmail(e.target.value)}></input></td>
                            <td><input type='number' value={phone} onChange={e=>setPhone(e.target.value)}></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button type="submit">Save</button>
                <button><Link to={'/user'}>Back</Link></button>
            </div>
            </form>
        </div>
     );
}
 
export default Adduser;