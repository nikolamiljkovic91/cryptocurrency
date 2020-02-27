import React, { useState } from 'react'
import Header from '../Header/Header'
import { Card, Button } from 'react-bootstrap'
import classes from './Profile.module.css'
import IMG from '../../assets/images/IMG1.JPG'
import { Redirect } from 'react-router-dom'


export const Profile = () => {

    const [toggle, setToggle] = useState(false)

    
    if(!localStorage.getItem('auth')){
        return <Redirect to='/' />
    }

    const URL = 'https://api.adorable.io/avatars/285/nikolamiljkovic91@gmail.com'

    let toggleImage = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <Header />
            <Card className={classes.Profile} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={toggle ? URL : IMG} />
            <Card.Body className='p-0'>
                <Card.Title>Nikola Miljkovic</Card.Title>
                <Card.Text className={classes.ProfileText}>
                <Card.Link className='text-muted ml-0' href='mailto:nikolamiljkovic91@gmail.com'>nikolamiljkovic91@gmail.com</Card.Link>
                <Card.Link className='text-muted ml-0 mb-3' href='https://github.com/nikolamiljkovic91' target='_blank'>https://github.com/nikolamiljkovic91</Card.Link>
                </Card.Text>
                <Button onClick={toggleImage} variant="primary">Toggle avatar</Button>
            </Card.Body>
            </Card>
        </>
    )
}
