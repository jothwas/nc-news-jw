import { Container, Nav, Navbar } from "react-bootstrap";
import { AccountCircleSharp, CellTowerOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
      <Container>
        <Navbar.Brand href="/">
          <CellTowerOutlined className="nav-icon-margin" />/ readdit: a nc news
          app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">all articles</Nav.Link>
            <Nav.Link href="/topics/coding">coding</Nav.Link>
            <Nav.Link href="/topics/football">football</Nav.Link>
            <Nav.Link href="/topics/cooking">cooking</Nav.Link>
          </Nav>
          <Navbar.Text>
            <AccountCircleSharp className="nav-icon-margin" />
            {loggedInUser.username}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
