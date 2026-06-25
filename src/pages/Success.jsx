import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl">
        ✅
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Account Created Successfully
      </h2>

      <Link
        to="/dashboard"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Go To Dashboard
      </Link>
    </div>
  );
}

export default Success;