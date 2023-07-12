import { useRoutes } from "react-router-dom";
import GeneralRoutes from "./GeneralRoutes";

export default function Router() {
  return useRoutes([GeneralRoutes]);
}
