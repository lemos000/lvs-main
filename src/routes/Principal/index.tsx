import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Principal() {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="">
      <Header nameProps={user.name}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}