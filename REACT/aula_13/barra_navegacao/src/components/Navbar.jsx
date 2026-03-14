import React from "react";
import glamorous from "glamorous";

const Nav = glamorous.nav({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  backgroundColor: "#222",
  color: "#fff",
  flexWrap: "wrap",
});

const Logo = glamorous.h1({
  margin: 0,
  fontSize: "24px",
});

const Links = glamorous.div({
  display: "flex",
  gap: "20px",

  "@media (max-width: 600px)": {
    flexDirection: "column",
    width: "100%",
    marginTop: "15px",
  },
});

const LinkItem = glamorous.a({
  color: "#fff",
  textDecoration: "none",

  ":hover": {
    color: "#ff69b4",
  },
});

function Navbar() {
  return (
    <Nav>
      <Logo>MinhaLogo</Logo>

      <Links>
        <LinkItem href="#">Início</LinkItem>
        <LinkItem href="#">Sobre</LinkItem>
        <LinkItem href="#">Contato</LinkItem>
      </Links>
    </Nav>
  );
}

export default Navbar;