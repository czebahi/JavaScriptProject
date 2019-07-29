import React from "react";

function About() {
    return (

        <div className="container">
            <br/>
            <div className="w3-row-padding" id="contact">
                <div className="w3-center w3-padding-64">
                    <h1 className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">About Us</h1>
                </div>
                <hr/>
                <div className="w3-third w3-margin-bottom">
                    <div className="w3-card-4">
                        <div className="w3-container">
                        <h3>Anjali</h3>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        </div>
                    </div>
                </div>

                <div className="w3-third w3-margin-bottom">
                    <div className="w3-card-4">
                        <div className="w3-container">
                        <h3>Jo</h3>
                        <p>A second year student in Computer Programmer course. 
                            Very much interested in .NET Framework development and Android OS.
                            Graduating in December 2019.</p>
                        </div>
                    </div>
                </div>

                <div className="w3-third w3-margin-bottom">
                    <div className="w3-card-4">
                        <div className="w3-container">
                        <h3>Lynette</h3>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default About;