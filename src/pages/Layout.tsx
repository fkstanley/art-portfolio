import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
