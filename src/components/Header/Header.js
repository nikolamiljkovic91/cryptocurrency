import React from 'react'
import { Navbar, Form, Nav, Button } from 'react-bootstrap';

export const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Crypto</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            <Form inline>
            <Button variant="primary">Login</Button>
            </Form>
        </Navbar>
        </>
    )
}
