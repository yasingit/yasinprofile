
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Footer = () => {

    const loaction = {
        display : 'flex'
    }
    const loactionIcon = {
        padding : '0px 10px 0px 0px'
    }
    return(
        <div className='footer'>
            <Container fluid="sm" >
            <Row>
                <Col xs={12} sm={12} md={4} lg={4} className='resbottom'>
                    <div>
                        <div style={loaction}>
                            <div style={loactionIcon} className="socialIcons"><ion-icon name="navigate"></ion-icon></div>
                            <div>
                                <div className='footHeading'>Locate us</div>
                                <div className='footDecs'>G M Street, Tirupati</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className='resbottom'>
                <div>
                        <div style={loaction}>
                            <div style={loactionIcon} className="socialIcons"><ion-icon name="call"></ion-icon></div>
                            <div>
                                <div className='footHeading'>Give us a call</div>
                                <div className='footDecs'>+91 9700700274</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                <div>
                        <div style={loaction}>
                            <div style={loactionIcon} className="socialIcons"><ion-icon name="mail"></ion-icon></div>
                            <div>
                                <div className='footHeading'>Get in online</div>
                                <div className='footDecs'>sdyasin.shaik@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </Col>
                </Row>
                </Container>
        </div>
    )
}

export default Footer;