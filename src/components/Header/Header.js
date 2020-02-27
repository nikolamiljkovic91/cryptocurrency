import React, { useState, useEffect } from 'react'
import { Navbar, Form, Nav, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('auth'))
    }, [])


    let logInHandler = () => {
        setIsLoggedIn(true)
        localStorage.setItem('auth', JSON.parse("true"))
    }

    let logOutHandler = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('auth')
        props.history.push('/')
    }

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Crypto</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isLoggedIn && <Nav.Link href="/profile">Profile</Nav.Link>}
            </Nav>
            <Form inline>
            {!isLoggedIn ? <Button onClick={logInHandler} variant="primary">Login</Button> : <Button onClick={logOutHandler} variant="primary">Logout</Button>}
            </Form>
        </Navbar>
        </>
    )
}

export default withRouter(Header)