import React, { useRef, useState } from "react";
import { Button, Container, Nav, Navbar, NavLink,Image, Modal, Form, InputGroup, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./style.css"

function NavbarComponent (){
    const email = useRef()
    const password = useRef()
    const fullname = useRef()
    const gender = useRef()
    const phone = useRef()
    const address = useRef()
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")
    // State modal
    const [showRegister, setShowRegister] = useState(false)
    const [showLogin, setShowLogin] = useState(false);
    const handleShow =()=> setShowLogin(true);
    const handleClose =()=> setShowLogin(false);
    const handleShowRegist = () => setShowRegister(true);
    const handleCloseRegist = () => setShowRegister(false);


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const logout = () => {localStorage.removeItem};
    const [showDrop , setshowDrop] = useState(false);
    const handleDrop = () => setshowDrop(false);
    

    const handleSignUp = () =>{
        if(email.current.value&&password.current.value)
        {
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("fullname",fullname.current.value)
            localStorage.setItem("gender",gender.current.value)
            localStorage.setItem("phone",phone.current.value)
            localStorage.setItem("addres",address.current.value)
            localStorage.setItem("signUp",email.current.value)
            alert("Account Created,Please Login")
            window.location.reload()
        }
    }

    const handleSignIn=()=>{
        if
        (email.current.value===localEmail&&password.current.value===localPassword){
            localStorage.setItem("signUp",email.current.value);
        }else{
            alert("Email atau Password Salah!")
        }
    }

    const handleLogout=()=>{
        localStorage.clear ("loggedInUser");
        setIsLoggedIn(false);
        setshowDrop(false);
        
    };

    React.useEffect(()=>{
        const  loggedInUser = localStorage.getItem("email");
        if (loggedInUser) {
            setIsLoggedIn(true);
        }
    },[])



    return (
        <>
            <Navbar bg="dark" variant="dark"
                style={{
                    width:"1500px",
                    height:"70px",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Container>
                    <Nav>
                    <Link to="/">
                        <div className="text-white fw-bold d-flex justify-content-start text-decoration-none d-flex align-items-center pt-2 pb-2" 
                        style={{ marginLeft:"48px",marginRight:"30px", fontSize:"14px"}}
                        id="RouterNavLink">Home</div>
                    </Link>
                    <Link to="/tvshows">
                        <div className="text-white fw-bold d-flex justify-content-start text-decoration-none d-flex align-items-center pt-2 pb-2" 
                        style={{ width:"80px", fontSize:"14px"}}
                        id="RouterNavLink"> Tv Shows </div>
                       
                    </Link>
                    <Link to="/movies"><div
                        className="text-white fw-bold d-flex justify-content-start text-decoration-none d-flex align-items-center pt-2 pb-2" 
                        style={{fontSize:"14px"}}
                        id="RouterNavLink">Movies</div>
                    </Link>
                    </Nav>
                </Container>
                <Container>
                    <Image src="/assets/images/dumbflix.png"></Image>
                </Container>
                {isLoggedIn ? (
                    <Dropdown >
                    <Dropdown.Toggle
                            variant="black"
                            
                            id="dropdown-basic"
                        >
                            <Image
                            src={"/assets/icon/profile-dd.svg"}
                            style={{
                                objectFit: "cover",
                                width: "30px",
                                height: "30px",
                                border: "1px solid white",
                                marginRight:"92px"
                            }}
                            className="rounded-circle"
                            />
                        </Dropdown.Toggle >
                        
                            <Dropdown.Menu style={{background:"#1f1f1f"}}>
                        
                            <Dropdown.Item
                                  style={{ color: "white" }}
                                  className="d-flex align-items-center mt-2"
                                >
                                  <Image
                                    src="/assets/icon/pay-dd.svg"
                                    style={{
                                      objectFit: "cover",
                                      width: "20px",
                                      height: "20px",
                                      color: "black",
                                    }}
                                  />
                                  <b className="ms-2" >Pay</b>
                                </Dropdown.Item>
                                <Dropdown.Item
                                style={{ color: "white" }}
                                className="d-flex align-items-center"
                               
                                >
                                <Image
                                    src="/assets/icon/logout-dd.svg"
                                    style={{
                                    objectFit: "cover",
                                    width: "20px",
                                    height: "20px",
                                    }}
                                    />
                                    <b 
                                    className="ms-2"
                                    onClick={handleLogout}
                                    >Logout</b>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                        
                        
                        </Dropdown>
                        ) : ( 
                        <>
                    <Button onClick={handleShowRegist}
                    style={{
                        background:"white",
                        color:"red",
                        fontWeight:"700",
                        fontSize:"14px"
                    }}>
                    Register
                    </Button>
                    <Button onClick={handleShow}
                    style={{
                        background:"red",
                        fontWeight:"700",
                        fontSize:"14px",
                        marginLeft:"22px",
                        marginRight:"43px"
                    }}>
                    Login
                </Button>
                        </>
                )
                }
    
            </Navbar>

            {/* Modal Login */}
                
            <Modal show={showLogin} onHide={handleClose}>
                <Modal.Body style={{
                    backgroundColor: "#1F1F1F",
                    color: "white",
                    padding: "30px",
                    border: "2px solid black",
                }} className="rounded">
                    <h2 >
                        <b className="modalText">Login</b>
                    </h2>
                    <Form className="mt-4">
                        <InputGroup className="mb-3 mt-3">
                            <Form.Control 
                            placeholder="Email"
                            type="email"
                            ref={email}
                            style={{
                                backgroundColor: "#4C4C4C",
                                borderColor: "white",
                                color: "white", 
                            }}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3 mt-3">
                            <Form.Control 
                            placeholder="Password"
                            ref={password}
                            type="password"
                            style={{
                                backgroundColor: "#4C4C4C",
                                borderColor: "white",
                                color: "white", 
                            }}
                            />
                        </InputGroup>
                        <Button
                        style={{
                            backgroundColor: "#E50914",
                            color: "white",
                            borderRadius: "5px",
                        }}
                        className="w-100 pt-2 pb-2 mt-3"
                        type="submit"
                        onClick={()=>{
                            handleSignIn();}}
                        >
                        <b>Login</b>
                        </Button>
                        
                        <div className="mt-3 w-100 d-flex justify-content-center">
                        <p>
                            Don't have an account ?
                            <b
                            style={{ cursor: "pointer" }}
                            className="ms-1"
                            onClick={()=>{
                                handleClose();
                                handleShowRegist();
                            }}
                            >
                            Register Here
                            </b>
                        </p>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Register Modal */}
            
            <Modal show={showRegister} onHide={handleCloseRegist}>
                <Modal.Body
                style={{
                    backgroundColor: "#1F1F1F",
                    color: "white",
                    padding: "30px",
                    border: "2px solid black",
                  }}
                  className="rounded"
                  >
                    <h2>
                    <b>Register</b>
                    </h2>
                    <Form className="mt-4" >
                    <InputGroup className="mb-3 mt-3">
                    <Form.Control
                        placeholder="Email"
                        style={{
                        backgroundColor: "#4C4C4C",
                        borderColor: "white",
                        color: "white",
                        }}
                        ref={email}
                        type="email"
                        name="email"
                    />
                    </InputGroup>
                    <InputGroup className="mb-3 mt-3">
                    <Form.Control
                        placeholder="Password"
                        style={{
                        backgroundColor: "#4C4C4C",
                        borderColor: "white",
                        color: "white",
                        }}
                        ref={password}
                        type="password"
                        name="password"
                    />
                    </InputGroup>
                    <InputGroup className="mb-3 mt-3">
                    <Form.Control
                        placeholder="Full Name"
                        style={{
                        backgroundColor: "#4C4C4C",
                        borderColor: "white",
                        color: "white",
                        }}
                        ref={fullname}
                        name="fullName"
                    />
                    </InputGroup>
                    <InputGroup className="mb-3 mt-3">
                    <Form.Control
                        placeholder="Gender"
                        style={{
                        backgroundColor: "#4C4C4C",
                        borderColor: "white",
                        color: "white",
                        }}
                        ref={gender}
                        name="gender"
                    />
                    </InputGroup>
                    <InputGroup className="mb-3 mt-3">
                    <Form.Control
                        placeholder="Phone"
                        style={{
                        backgroundColor: "#4C4C4C",
                        borderColor: "white",
                        color: "white",
                        }}
                        ref={phone}
                        name="phone"
                        type="number"
                    />
                    </InputGroup>
                    <InputGroup className="mb-3 mt-3">
                    <Form.Control
                        placeholder="Address"
                        style={{
                        backgroundColor: "#4C4C4C",
                        borderColor: "white",
                        color: "white",
                        }}
                        ref={address}
                        name="address"
                    />
                    </InputGroup>
                    <Button
                    style={{
                        backgroundColor: "white",
                        color: "#E50914",
                        borderRadius: "5px",
                    }}
                    type="submit"
                    className="w-100 pt-2 pb-2 mt-3"
                    onClick={handleSignUp}
                    >
                    <b>Register</b>
                    </Button>
                    <div className="mt-3 w-100 d-flex justify-content-center">
                    <p>
                        Already have an account ?
                        <b
                        style={{ cursor: "pointer" }}
                        className="ms-1"
                        onClick={() => {
                            handleCloseRegist();
                            handleShow();
                        }}
                        >
                        Login Here
                        </b>
                    </p>
                    </div>
                </Form>
                </Modal.Body>
            </Modal>


        </>
    )
}


export default NavbarComponent;