import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-800">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
