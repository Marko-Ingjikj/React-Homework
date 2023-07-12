import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addEmployee,
  updateEmployee,
} from "../../common/actions/emplyeeActions";

let newId = 21;

export default function EmployeeForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

  let isEditing = false;
  if (id) {
    isEditing = true;
  }

  const { employees } = useSelector((state) => state.company);

  useEffect(() => {
    if (isEditing) {
      const employee = employees.find((employee) => employee.id == id);
      setName(employee.name);
      setAge(employee.age);
      setPosition(employee.position);
      setCompany(employee.company);
    }
  }, []);

  const handleSubmit = () => {
    if (!isEditing) {
      console.log(1);
      dispatch(addEmployee({ id: newId, name, age, position, company }));
      newId += 1;
    } else {
      console.log(2);
      let newData = { name, age, position, company };
      dispatch(updateEmployee(id, newData));
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-div">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-div">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="form-div">
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      <div className="form-div">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <button onClick={() => handleSubmit()}>Submit</button>
      <button>Cancel</button>
    </form>
  );
}
