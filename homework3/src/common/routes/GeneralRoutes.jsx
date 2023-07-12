import Company from "../../components/Company/Company";
import EmployeeForm from "../../components/Company/EmployeeForm";
import Layout from "../../components/Layout/Layout";

const GeneralRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Company />,
    },
    {
      path: "/form",
      element: <EmployeeForm />,
    },
    {
      path: "/form/:id",
      element: <EmployeeForm />,
    },
  ],
};

export default GeneralRoutes;
