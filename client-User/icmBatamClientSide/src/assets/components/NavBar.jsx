import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icmLogo from "../images/icm-logo.png";
import "../styling/Navbar.scss"

function NavBar(){

    return <div>
        <Navbar expand="lg" className="navbar-cmp">
        <Container>
            <Navbar.Brand as={Link} to="/">
            <img
                src={icmLogo}
                alt="iCM Logo"
                className="navbar-logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto navbar-center">
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>

                <Link to="/aboutus" className="nav-link">
                    About Us
                </Link>

                <Link to="/#cellgroup" className="nav-link">
                    Cell Groups
                </Link>

                <Link to="/#location" className="nav-link">
                    Locations
                </Link>

                <Link to="/#giving" className="nav-link">
                    Giving
                </Link>

                <NavLink to="/events" className="nav-link">
                    Events
                </NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
}

export default NavBar;