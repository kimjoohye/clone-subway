import React from 'react'
import Header from './Header'
import Maincontainer from './Maincontainer'
import Footer from './Footer'
import { Container } from './styledComp'

function Main(){

    return <Container>
        <Header />
        <Maincontainer />
        <Footer />
    </Container>
}

export default Main