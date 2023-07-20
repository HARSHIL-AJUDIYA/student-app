import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchStudentObj, FunctionUpdateStudent, FunctionAddStudent } from "../Redux/Action";

const StudentForm = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("primary");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();
  const studentobj = useSelector((state) => state.user.studentobj);

  const isUpdateMode = !!code;

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { name, email, phone, role };

    if (isUpdateMode) {
      dispatch(FunctionUpdateStudent(studentData, id));
      window.alert("Student updated successfully!");
    } else {
      dispatch(FunctionAddStudent(studentData));
      window.alert("Student added successfully!");
    }

    navigate("/list");
    console.log("studentData", studentData);
  };

  useEffect(() => {
    if (isUpdateMode) {
      dispatch(FetchStudentObj(code));
    }
  }, [code, dispatch, isUpdateMode]);

  useEffect(() => {
    if (isUpdateMode && studentobj) {
      setId(studentobj.id);
      setName(studentobj.name);
      setEmail(studentobj.email);
      setPhone(studentobj.phone);
      setRole(studentobj.role);
    }
  }, [studentobj, isUpdateMode]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>{isUpdateMode ? "Update" : "Add"} Student</h2>
        </div>
        <div>
          <table border={2}>
            <thead>
              <tr>
                {!isUpdateMode && <td>ID</td>}
                <td>Name</td>
                <td>Role</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {!isUpdateMode && <td><input type="text" value={id} disabled="disabled" /></td>}
                <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                <td>
                  <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="higher-secondary">Higher-Secondary</option>
                  </select>
                </td>
                <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                <td><input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button type="submit">{isUpdateMode ? "Update" : "Save"}</button>
          <button><Link to={'/list'}>Back</Link></button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
