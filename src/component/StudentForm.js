import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchStudentObj, FunctionUpdateStudent, FunctionAddStudent } from "../Redux/Action";

const StudentForm = () => {
  const [{ id, name, email, phone, role }, setState] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    role: "primary",
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();
  const studentobj = useSelector((state) => state.user.studentobj);

  const isUpdateMode = !!code;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!name.trim()) {
    //   window.alert("Please enter a name.");
    //   return;
    // }
    // else if(!email.match(/[a-z0-9]+@[a-z]+.[a-z]{2,3}/)) {
    //   window.alert("Please enter a valid email address.");
    //   return;
    // }
    // else if (!phone.match(/^\d{10}$/)) {
    //   window.alert("Please enter a valid phone number.");
    //   return;
    // }
    // else{
    const studentData = { name, email, phone, role };

    if (isUpdateMode) {
      dispatch(FunctionUpdateStudent(studentData, id));
      window.alert("Student updated successfully!");
    } else {
      dispatch(FunctionAddStudent(studentData));
      window.alert("Student added successfully!");
    }

    navigate("/list");
    // }
    // console.log("studentData", studentData);
  };

  useEffect(() => {
    if (isUpdateMode) {
      dispatch(FetchStudentObj(code));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateMode]);

  useEffect(() => {
    if (isUpdateMode && studentobj) {
      setState(studentobj);
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
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Role</td>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email ID"
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    placeholder="Phone No."
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <select
                    name="role"
                    value={role}
                    onChange={handleInputChange}
                  >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="higher-secondary">Higher-Secondary</option>
                  </select>
                </td>
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
