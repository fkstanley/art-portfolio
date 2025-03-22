import { Container, Group, Title } from "@mantine/core";
import { useState } from "react";
import classes from "./Header.module.css";

const pages = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export const Header = () => {
  const [active, setActive] = useState(pages[0].href);

  const items = pages.map((page) => (
    <a
      key={page.title}
      href={page.href}
      className={classes.link}
      data-active={active === page.href || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(page.href);
      }}
    >
      {page.title}
    </a>
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
