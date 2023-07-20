// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { FunctionAddStudent } from "../Redux/Action";

// const Addstudent = () => {
//     const[name,setName]=useState('');
//     const[email,setEmail]=useState('');
//     const[phone,setPhone]=useState('');
//     const[role,setRole]=useState('primary');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const studentobj={name,email,phone,role};
//         dispatch(FunctionAddStudent(studentobj));
//         navigate('/list')
//         window.alert("Student added successfully!")
//         console.log("studentobj",studentobj);
//     }

//     return ( 
//         <div>
//         <form onSubmit={handleSubmit}>
//             <div><h2>Add Student</h2></div>
//             <div>
//                 <table border={2}>
//                     <thead>
//                         <tr>
//                             <td>Name</td>
//                             <td>Role</td>
//                             <td>Email</td>
//                             <td>Phone</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td><input type='text' value={name} onChange={e=>setName(e.target.value)}></input></td>
//                             <td><select value={role} onChange={e=>setRole(e.target.value)}>
//                             <option value="primary">Primary</option>
//                             <option value="secondary">Secondary</option>
//                             <option value="higher-secondary">Higher-Secondary</option>
//                             </select></td>
//                             <td><input type='email' value={email} onChange={e=>setEmail(e.target.value)}></input></td>
//                             <td><input type='number' value={phone} onChange={e=>setPhone(e.target.value)}></input></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//             <div>
//                 <button type="submit">Save</button>
//                 <button><Link to={'/list'}>Back</Link></button>
//             </div>
//             </form>
//         </div>
//      );
// }
 
// export default Addstudent;