import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



const ServiceCard = () => {

    const serviceTop = {
        padding : '100px 0px 100px 0px'
    }

    const serviceText = {
        fontWeight : 'bold',
        textTransform : 'uppercase',
        color : '#FF4A57',
        textAlign : 'center',
        fontsize : '12px'
    }
    const serviceHeading = {
        fontWeight : 'bold',
        textTransform : 'capitalize',
        textAlign : 'center',
        marginBottom: '25px',
        fontSize: '60px'
    }
    const serviceDes = {
        color : '#dfdfd',
        fontSize : '16px',
        lineHeight : '26px',
        textAlign : 'center',
        width : '50%',
        margin : 'auto'
    }
    return (
        <div>
            <Container style={serviceTop}>
                <Row>
                    <div>
                        <p style={serviceText}>services</p>
                        <p style={serviceHeading}>my services</p>
                        <p style={serviceDes}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    </div>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={4} >
                        
                        <div>
                        <Card  className='itemService'>
                            <Card.Body >
                                <div className="iconSeviceCard"><ion-icon  name="code-slash-outline"></ion-icon></div>
                                <Card.Title><span className='headingServiceCard'>Web Development</span></Card.Title>
                                <Card.Text className='desSeviceCard'>
                                I am a web developer who designs, creates, and maintains websites, providing in the process a cohesive and user-friendly online portal for the use of clients, customers, work colleagues, and other interested parties.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4}>
                        <div>
                        <Card  className='itemService'>
                            <Card.Body >
                                <div className="iconSeviceCard"><ion-icon name="logo-web-component"></ion-icon></div>
                                <Card.Title><span className='headingServiceCard'>Web Design</span></Card.Title>
                                <Card.Text className='desSeviceCard'>
                                Identifies the goals of a website or webpage and promotes accessibility for all potential users.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4}>
                        <div>
                        <Card  className='itemService'>
                            <Card.Body >
                                <div className="iconSeviceCard"><ion-icon  name="code-slash-outline"></ion-icon></div>
                                <Card.Title><span className='headingServiceCard'>Freelancer</span></Card.Title>
                                <Card.Text className='desSeviceCard'>
                                Self-employed expert, who is responsible for coding and designing innovative websites
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServiceCard;