import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../common/actions/emplyeeActions";

export default function Employee({ id, name, age, position, company, office }) {
  const dispatch = useDispatch();

  return (
    <li className="employee-li">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
        alt=""
        className="profile-photo"
      />
      <p>
        <b>{name}</b> - {age}
      </p>
      <p>
        {position} at {company}
      </p>
      <p>in {office}</p>

      <Link to={`/form/${id}`} className="edit">
        Edit
      </Link>
      <button onClick={() => dispatch(deleteEmployee(id))} className="delete">
        Delete
      </button>
    </li>
  );
}
