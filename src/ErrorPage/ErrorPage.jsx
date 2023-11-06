import { Link } from "react-router-dom";

import img404 from "../assets/404.webp";
import PageTitle from "../Helmet/PageTitle";

const ErrorPage = () => {
  return (
    <div className="text-center max-w-7xl mx-auto">
      <PageTitle title="404 Not FOund" />

      <img src={img404} alt="" />
      <Link to="/">
        <button className="btn btn-neutral">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
