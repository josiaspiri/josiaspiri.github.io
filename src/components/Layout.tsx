import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="prose-lg prose-invert m-auto p-4">
      <Outlet />
    </main>
  );
}
