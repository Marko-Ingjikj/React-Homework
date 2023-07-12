import { useMemo, useState } from "react";
import { setSearchTerm } from "../../common/actions/emplyeeActions.js";
import Employee from "./Employee.jsx";
import { useDispatch, useSelector } from "react-redux";

export default function Employees() {
  const dispatch = useDispatch();
  const [companyFilter, setCompanyFilter] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [officeFilter, setOfficeFilter] = useState("");

  const { employees, searchTerm } = useSelector((state) => state.company);

  const filteredEmployees = useMemo(() => {
    return employees.filter(
      (e) =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (companyFilter === "" || e.company === companyFilter) &&
        (positionFilter === "" || e.position === positionFilter) &&
        (officeFilter === "" || e.office === officeFilter)
    );
  }, [employees, searchTerm, companyFilter, positionFilter, officeFilter]);

  return (
    <div>
      <div className="forms">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <select
          name="company"
          id=""
          onChange={(e) => setCompanyFilter(e.target.value)}>
          <option value="">...</option>
          <option value="Google">Google</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Uber">Uber</option>
          <option value="Samsung">Samsung</option>
          <option value="IBM">IBM</option>
          <option value="Intel">Intel</option>
          <option value="Apple">Apple</option>
          <option value="Twitter">Twitter</option>
          <option value="Amazon">Amazon</option>
          <option value="Adobe">Adobe</option>
          <option value="Salesforce">Salesforce</option>
          <option value="Facebook">Facebook</option>
          <option value="HP">HP</option>
          <option value="Tesla">Tesla</option>
        </select>

        <select
          name="position"
          id=""
          onChange={(e) => setPositionFilter(e.target.value)}>
          <option value="">...</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Software Development Engineer">
            Software Development Engineer
          </option>
          <option value="Electrical Engineer">Electrical Engineer</option>
          <option value="Product Marketing Manager">
            Product Marketing Manager
          </option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Social Media Manager">Social Media Manager</option>
          <option value="Hardware Engineer">Hardware Engineer</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="Sales Manager">Sales Manager</option>
          <option value="Quality Assurance Engineer">
            Quality Assurance Engineer
          </option>
          <option value="Android Developer">Android Developer</option>
          <option value="Operations Manager">Operations Manager</option>
          <option value="User Experience Researcher">
            User Experience Researcher
          </option>
          <option value="Product Designer">Product Designer</option>
        </select>

        <select
          name="office"
          id=""
          onChange={(e) => setOfficeFilter(e.target.value)}>
          <option value="">...</option>
          <option value="London">London</option>
          <option value="Seattle">Seattle</option>
          <option value="San Francisco">San Francisco</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Palo Alto">Palo Alto</option>
          <option value="Santa Clara">Santa Clara</option>
          <option value="San Jose">San Jose</option>
          <option value="Houston">Houston</option>
          <option value="Seoul">Seoul</option>
          <option value="Mountain View">Mountain View</option>
          <option value="Redmond">Redmond</option>
          <option value="Menlo Park">Menlo Park</option>
        </select>
      </div>
      <ul className="employees-ul">
        {filteredEmployees.map((emplyee) => (
          <Employee
            key={emplyee.id}
            id={emplyee.id}
            name={emplyee.name}
            age={emplyee.age}
            position={emplyee.position}
            company={emplyee.company}
            office={emplyee.office}
          />
        ))}
      </ul>
    </div>
  );
}
