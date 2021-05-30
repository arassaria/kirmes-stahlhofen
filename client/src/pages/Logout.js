import { useHistory } from "react-router";

const Logout = () => {
  const history = useHistory();
  if (localStorage.getItem("token") !== null) {
    localStorage.removeItem("token");
    history.push("/");
  } else {
    history.push("/");
  }
};

export default Logout;
