import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../styles/faq.css'
import Header from '../components/Header'

class Faq extends React.Component {

    state = {
        one: { isOpen: false },
        two: { isOpen: false },
        three: { isOpen: false },
        four: { isOpen: false },
        five: { isOpen: false },
        six: { isOpen: false }
    }

    toggle = id => {
        switch (id){
            case 1: return this.setState({  one: {isOpen:!this.state.one.isOpen},
                                            two: {isOpen: false}, three: {isOpen: false},
                                            four: {isOpen: false}, five: {isOpen: false},
                                            six: {isOpen: false} })

            case 2: return this.setState({  two: {isOpen:!this.state.two.isOpen},
                                            one: { isOpen: false}, three: {isOpen: false},
                                            four: { isOpen: false}, five: {isOpen: false},
                                            six: {isOpen: false} })

            case 3: return this.setState({  three: {isOpen:!this.state.three.isOpen},
                                            one: { isOpen: false}, two: {isOpen: false},
                                            four: { isOpen: false}, five: {isOpen: false},
                                            six: {isOpen: false} })

            case 4: return this.setState({  four: {isOpen:!this.state.four.isOpen},
                                            one: { isOpen: false}, two: {isOpen: false},
                                            three: { isOpen: false}, five: {isOpen: false},
                                            six: {isOpen: false} })

            case 5: return this.setState({  five: {isOpen:!this.state.five.isOpen},
                                            one: { isOpen: false}, two: {isOpen: false},
                                            three: { isOpen: false}, six: {isOpen: false},
                                            four: {isOpen: false} })  

            case 6: return this.setState({  six: {isOpen:!this.state.six.isOpen},
                                            one: { isOpen: false}, two: {isOpen: false},
                                            three: { isOpen: false}, four: {isOpen: false},
                                            five: {isOpen: false} })                                                             
        }
    }

    render() {

        return (
            <>
            <Header />
            <h1>Preguntas frecuentes</h1>
                <div className="PreguntasFrecuentes">
                    <Button onClick={() => this.toggle(1)} className="button-Faq" >¿Por qué ser vegano?</Button>
                    <Collapse style={{transition: 'all 0.3s'}} isOpen={this.state.one.isOpen}>
                        <Card className="card-faq">
                            <CardBody style={{width: '100%'}}>
                                <p> Porque el veganismo hace sentir consecuentes el amor y respeto que tenemos 
                                    hacia los seres vivos y el planeta.
                                    Consideramos que el futuro es vegano, por eso lucharemos para activar 
                                    y contagiar con alegría a las demás empresas y personas.</p>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <Button onClick={() => this.toggle(2)} className="button-Faq" >¿Cuál es un producto vegano?</Button>
                    <Collapse style={{transition: 'all 0.3s'}} isOpen={this.state.two.isOpen}>
                        <Card className="card-faq">
                            <CardBody>
                                <p>Se considera vegano todo aquel producto cuyos ingredientes 
                                    y procesos no provengan de animales ni de sus derivados.</p>                        
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            <h1>Formas de pago</h1>
            <div className="formasDePago">
                    <Button onClick={() => this.toggle(3)} className="button-Faq" >¿Cuáles son los medios de pago?</Button>
                    <Collapse style={{transition: 'all 0.3s'}} isOpen={this.state.three.isOpen}>
                        <Card className="card-faq">
                            <CardBody style={{width: '100%'}}>
                                <h4>Dinero en Mercado Pago</h4>
                                <h4>Tarjeta de crédito en hasta 12 cuotas</h4>
                                <h4>Tarjeta de débito</h4>
                                <h4>En efectivo en puntos de pago</h4>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <Button onClick={() => this.toggle(4)} className="button-Faq" >¿Es segura mi compra con mercado pago?</Button>
                    <Collapse style={{transition: 'all 0.3s'}} isOpen={this.state.four.isOpen}>
                        <Card className="card-faq">
                            <CardBody>
                                <p> MercadoPago es la plataforma de pago online líder de América Latina y 
                                    garantiza la seguridad en todas las operaciones que se generen a través de su sistema.
                                    Cuenta con un sistema de privacidad que protege los datos de la tarjeta y 
                                    con un programa de protección al comprador. Si surgiera algún inconveniente con la compra, 
                                    la plataforma te devuelve el 100% del dinero.</p>                        
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            <h1>Métodos de envío</h1>
                <Button onClick={() => this.toggle(5)} className="button-Faq" >¿Cuáles son los métodos de envío o retiro disponibles?</Button>
                    <Collapse style={{transition: 'all 0.3s'}} isOpen={this.state.five.isOpen}>
                        <Card className="card-faq">
                            <CardBody style={{width: '100%'}}>
                                <p> El envio a domicilio tiene un costo estimado para envios en capital federal y otro para el interior del pais. 
                                    El retiro personal por nuestro local no tiene costos extras, 
                                    aú así se encuientra temporalmente suspendido todo retiro de forma personal.</p>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <Button onClick={() => this.toggle(6)} className="button-Faq" >¿Qué documentación se requiere para recibir o retirar mi compra?</Button>
                    <Collapse style={{transition: 'all 0.3s'}} isOpen={this.state.six.isOpen}>
                        <Card className="card-faq">
                            <CardBody>
                                <p> Por razones de sanidad en debida conformidad comunitaria, 
                                    nuestra actividad no se encuentra autorizada a reanudar, por lo tanto, 
                                    quedan suspendidos los retiros en nuestro local. En el caso de que se 
                                    requiera una  excepción pueden escribirnos a feliceslasvacas@gmail.com 
                                    para encontrar alternativas y coordinar el despacho.</p>                       
                            </CardBody>
                        </Card>
                    </Collapse>
            </>
        )
    }
}

export default Faq