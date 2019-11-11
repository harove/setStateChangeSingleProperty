import React, {Component} from 'react';
import {Card as CardRS, CardBody, CardTitle, Container, Col, Button} from 'reactstrap';

class Card extends Component {
    render(){
        

        return(
                <Container>
                    <Col lg = "6">
                        <CardRS>
                            <CardBody>
                                <CardTitle>
                                    Hey
                                </CardTitle>
                                <Button>Button</Button>
                            </CardBody>
                        </CardRS>
                    </Col>
                </Container>
        )
    }
}

export default Card;