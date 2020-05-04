import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Songscard from "components/Card/Songscard.js";

import Sidebar from "components/Sidebar/Sidebar.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    
      <ExamplesNavbar />

       <Row>
          <Col lg="2" md="2" sm="2" xs="2">
<Sidebar/>

</Col>




          <Col md="10" lg="10"  sm="10" xs="10">

      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip>
                 <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-youtube"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Youtube
              </UncontrolledTooltip>



            </div>
            <h3 className="title">Recent Uploads</h3>
 <Row>
   <Col lg="3" md="3" sm="6" xm="6">
<Songscard/>
   </Col>
<Col lg="1" md="4" sm="4" xm="4">

   </Col>



   <Col lg="3" md="3" sm="6" xm="6">
<Songscard/>
   </Col>
   <Col lg="1" md="3" sm="3" xm="3">

   </Col>

   <Col lg="3" md="3" sm="6" xm="6">
<Songscard/>
   </Col>
 </Row>
 
 
 
           
            
          
        </div>
        
      </div>
    
    </Col>
    </Row>
    </>




  );
}

export default ProfilePage;
