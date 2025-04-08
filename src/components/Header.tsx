import {
  Container,
  Group,
  Title,
  Burger,
  Drawer,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

const pages = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
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
        <Title className={classes.title}>FIONA STANLEY</Title>
        <Group className={classes.links}>{items}</Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title={<Text fw={700}>Menu</Text>}
        hiddenFrom="sm"
        zIndex={1000}
      >
        <Stack gap="md">{items}</Stack>
      </Drawer>
    </header>
  );
};
