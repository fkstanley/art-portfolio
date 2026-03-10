import { useState } from "react";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { Burger } from "./Burger";
import { Drawer } from "./Drawer";

const pages = [
  { title: "Work", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const Header = () => {
  const location = useLocation();
  const [opened, setOpened] = useState(false);

  const toggle = () => setOpened((o) => !o);
  const close = () => setOpened(false);

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
      <div className={classes.inner}>
        <Link to="/" className={classes.logo}>
          Fiona Stanley
        </Link>
        <div className={classes.links}>{items}</div>
        <div className={classes.burger}>
          <Burger opened={opened} onClick={toggle} />
        </div>
      </div>

      <Drawer opened={opened} onClose={close}>
        {items}
      </Drawer>
    </header>
  );
};
