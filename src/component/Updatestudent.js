// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { FetchStudentObj, FunctionUpdateStudent } from "../Redux/Action";

// const Updatestudent = () => {
//     const[id,setId]=useState(0);
//     const[name,setName]=useState('');
//     const[email,setEmail]=useState('');
//     const[phone,setPhone]=useState('');
//     const[role,setRole]=useState('primary');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const {code} = useParams();

//     const studentobj=useSelector((state)=>state.user.studentobj)

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const studentobj={ id, name, email, phone, role };
//         dispatch(FunctionUpdateStudent(studentobj,id));
//         navigate('/list')
//         window.alert("Student updated successfully!")
//         console.log("studentobj...",studentobj);

//     }
//     useEffect(()=>{
//         dispatch(FetchStudentObj(code));
//     },[]);

//     useEffect(()=>{
//         if(studentobj){
//             setId(studentobj.id);
//             setName(studentobj.name);
//             setEmail(studentobj.email);
//             setPhone(studentobj.phone);
//             setRole(studentobj.role);
//         }
//     },[studentobj])
//     console.log("state...");
//     return ( 
//         <div>
//         <form onSubmit={handleSubmit}>
//             <div><h2>Update Student</h2></div>
//             <div>
//                 <table border={2}>
//                     <thead>
//                         <tr>
//                             <td>ID</td>
//                             <td>Name</td>
//                             <td>Role</td>
//                             <td>Email</td>
//                             <td>Phone</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td><input type='text' value={id} disabled="disabled"></input></td>
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
 
// export default Updatestudent;