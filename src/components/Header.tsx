import { Container, Group, Burger, Drawer, Stack } from "@mantine/core";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

const pages = [
  { title: "Work", href: "/" },
  { title: "Gallery", href: "/gallery" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const Header = () => {
  const location = useLocation();
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = pages.map((page) => (
    <Link
      key={page.title}
      to={page.href}
      className={classes.link}
      data-active={location.pathname === page.href || undefined}
      onClick={close}
    >
      {page.title}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Link to="/" className={classes.logo}>
          Fiona Stanley
        </Link>
        <Group className={classes.links} gap="xs">
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          color="var(--text-muted)"
        />
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="xl"
        hiddenFrom="sm"
        zIndex={1000}
        styles={{
          header: { backgroundColor: "var(--bg-elevated)" },
          body: { backgroundColor: "var(--bg-elevated)" },
          content: { backgroundColor: "var(--bg-elevated)" },
        }}
      >
        <Stack gap="lg" pt="xl">
          {items}
        </Stack>
      </Drawer>
    </header>
  );
};
