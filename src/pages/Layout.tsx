import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "var(--bg-primary)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
