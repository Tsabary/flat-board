import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="relative container mx-auto px-4 py-8 max-w-5xl">
      <Link to="/" className="text-2xl font-bold">
        LOGO
      </Link>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
