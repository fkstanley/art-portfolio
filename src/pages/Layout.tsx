import { AppShell } from "@mantine/core";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <AppShell
      header={{ height: 64 }}
      padding={0}
      styles={{
        root: { backgroundColor: "var(--bg-primary)" },
        main: { backgroundColor: "var(--bg-primary)" },
      }}
    >
      <AppShell.Header
        style={{
          backgroundColor: "var(--bg-primary)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
