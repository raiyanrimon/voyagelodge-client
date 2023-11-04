import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import img404 from "../assets/Add a heading.webp";
const ErrorPage = () => {
  return (
    <div className="text-center max-w-7xl mx-auto">
      <Navbar></Navbar>
      <img src={img404} alt="" />
      <Link to="/">
        <button className="btn btn-neutral">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
