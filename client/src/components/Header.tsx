import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';
import { logout } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const {userInfo} = useSelector((state: InitialState) => state.auth);

    const dispatch = useDispatch();

    const [logoutApiCall] = useLogoutMutation();

    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await logoutApiCall({}).unwrap();
            dispatch(logout(userInfo));
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <>
            <header>
                <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                    <Container>
                        <Link to='/'>
                            <Navbar.Brand>Redux Auth with JWT</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='ms-auto'>
                                {userInfo ? (
                                    <>
                                        <NavDropdown title={userInfo.name} id='username'>
                                            <Link to = '/profile'>
                                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                            </Link>
                                            <NavDropdown.Item onClick={logoutHandler}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                ) : (
                                    <>
                                        <Link to ='/login'>
                                            <Nav.Link>
                                                <FaSignInAlt /> Sign In
                                            </Nav.Link>
                                        </Link>
                                        <Link to='/register'>
                                            <Nav.Link>
                                                <FaSignOutAlt /> Sign Up
                                            </Nav.Link>
                                        </Link>
                                    </>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>    
                </Navbar>    
            </header>  
        </>
    )
}

export default Header;