
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typed from "typed.js";
import { useEffect, useRef } from 'react';

 const  Home = () => {

    const topIndex  = {
        paddingTop : '150px'
    }

    const topline = {
        fontSize: '20px',
        letterSpacing: '5px',
        color: '#1f2235'
    }
    const desHeading = {
        display:'block',
        fontSize: '3em',
        fontWeight: '800',
        color: '#1f2235',
        letterSpacing: '3px',
    }
    const descriptionText = {
        fontSize : '1.2em',
        color : '#1f2235'
    }

    const multiText = {
        color : '#7f00ff'
    }

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Web Developer", "Freelancer"], 
          startDelay: 300,
          typeSpeed: 200,
          backSpeed: 300,
          backDelay: 100,
          smartBackspace: true,
          loop: true,
          showCursor: true
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
    
  

    return(
        <Container fluid="sm">
            <Row>
                <Col xs={12} md={8} lg={8}>
                <div className='wrapper' style={topIndex} >
                        <span style={topline}>Hello<span class="helloUnderscore"></span></span>
                        <h1 style={desHeading}>I'm <span style={multiText} ref={el}></span></h1>
                        <p style={descriptionText}>I'm Yasin, professional web developer with long time experience in the field</p>
                        <div>
                            <button className="btns">Download CV</button>
                            <button className="btns"  type="button" data-toggle="modal" data-target="#myModal">Connect me</button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                
                </Col>
            </Row>
            <Row>
            </Row>
        </Container>
    ) 
}

export default Home;