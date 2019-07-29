import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardGroup } from 'reactstrap';

function Contact(){
    return ( 
        <div className="container">
            <br/>
            <div className="w3-center w3-padding-64">
                    <h1 className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Contact Us</h1>
            </div>
            <hr/>
            <CardGroup>
                <Card style={{ width: '20rem' }}>    
                    <CardBody>
                        <CardTitle><strong>Anjali AjithkumarPillai</strong></CardTitle>
                        <CardSubtitle className="mb-2 text-muted">Georgian College</CardSubtitle>
                        <CardText><email>Anjali.AjithkumarPillai@MyGeorgian.ca</email>
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <CardBody>
                        <CardTitle><strong>Jo Lim</strong></CardTitle>
                        <CardSubtitle className="mb-2 text-muted">Georgian College</CardSubtitle>
                        <CardText>
                        <email>Jo.Lim@MyGeorgian.ca</email>
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <CardBody>
                        <CardTitle><strong>Lynette Xie</strong></CardTitle>
                        <CardSubtitle className="mb-2 text-muted">Georgian College</CardSubtitle>
                        <CardText><email>Lynette.Xie@MyGeorgian.ca</email></CardText>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>  

    );
}

export default Contact;