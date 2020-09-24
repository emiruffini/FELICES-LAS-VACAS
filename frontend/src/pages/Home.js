import React from 'react'
import Carrousel from '../components/Carrousel'
import Destacado from '../components/Destacado'
import Footer from '../components/footer'
import Header from '../components/Header'
import Item from '../components/item'

class Home extends React.Component {


    render() {

        return (
            <>
                <Header />
                <Carrousel />
                <Destacado />
                <Footer />
            </>
        )
    }
}

export default Home
