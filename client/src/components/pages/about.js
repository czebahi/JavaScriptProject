import React from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import TeamImg from '../images/team.PNG';

function About() {

    return (
        <div className="container">
            <br/>
            <div className="w3-row-padding" id="contact">
                <div className="w3-center w3-padding-64">
                    <h1>About Us</h1>
                </div>
                <div className = "container">
                    <image src={TeamImg} alt="Team Member Image" width="500px" height="300px"/>
                </div>
                <hr/>
                <Card style={{background: '#95aacc'}}>    
                    <CardBody>
                        <CardTitle><strong>Anjali AjithkumarPillai</strong></CardTitle>
                        <CardText>Hi. I am Anjali Ajithkumar Pillai, studying semester 4 in computer programmer analyst advanced diploma program. 
                            I am very eager to learn new things and excel in everything I do. 
                            I find javascript very interesting and find to have a future in the same. 
                            Outside of school work I like to cook and play badminton.
                        </CardText>
                    </CardBody>
                </Card>
                <hr/>
                <Card style={{background: '#bab095' }}>
                    <CardBody>
                        <CardTitle><strong>Jo Lim</strong></CardTitle>
                        <CardText>
                        A second year student in Computer Programmer course. 
                            Very much interested in .NET Framework development and Android OS.
                            Graduating in December 2019.
                        </CardText>
                    </CardBody>
                </Card>
                <hr/>
                <Card style={{ background: '#bfd6ae' }}>
                    <CardBody>
                        <CardTitle><strong>Lynette Xie</strong></CardTitle>
                        <CardText></CardText>
                    </CardBody>
                </Card>
            </div>
        </div>  
    );
}

export default About;