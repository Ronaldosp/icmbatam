import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import icmLogo from "../images/icm-logo.png";
import "../styling/Navbar.scss"

function NavBar(){

    const handleLogout = ()=>{
        localStorage.clear()
        navigate('/login')
    }

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

                <Link to="/events" className="nav-link">
                    Events
                </Link>
            </Nav>
            <Nav className="ms-auto">
                <NavLink to="/register" className="nav-link">
                    Register
                </NavLink>
                <Button onClick={handleLogout} variant="danger">
                    Logout
                </Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
}

export default NavBar;