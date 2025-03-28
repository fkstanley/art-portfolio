import { Container, Group, Title } from "@mantine/core";
import { useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const pages = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export const Header = () => {
  const [active, setActive] = useState(pages[0].href);

  const items = pages.map((page) => (
    <Link
      key={page.title}
      to={page.href}
      className={classes.link}
      data-active={active === page.href || undefined}
      onClick={() => {
        setActive(page.href);
      }}
    >
      {page.title}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Title>FIONA STANLEY</Title>
        <Group>{items}</Group>
      </Container>
    </header>
  );
};
