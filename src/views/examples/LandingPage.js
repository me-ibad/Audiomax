import React from "react";
import Sidebar from "components/Sidebar/Sidebar.js";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormGroup,
   Collapse,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   UncontrolledDropdown,
   NavbarBrand,
   Navbar,
   NavItem,
   NavLink,
   Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Newnav from "components/Navbars/Newnav.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Songscard from "components/Card/Songscard.js";

function LandingPage() {
   const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      
      <div className="wrapper1">
        <IndexNavbar />
      
         <Row>
          <Col lg="3" md="3" sm="2" xs="2">
<Sidebar/>

</Col>




          <Col md="9" lg="9"  sm="10" xs="10">

<Row>
<Col lg="10" md="9" sm="9" xm="12">


<div className="trand1">

<Row>
<Col lg="4" md="4" sm="4" xm="4">
  <i aria-hidden="true" class="fire icon"></i>
  <span className="tran">Tranding</span>
</Col>
<Col lg="6" md="4" sm="4" xm="4">
  
</Col>
<Col lg="2" md="4" sm="4" xm="4">
  
</Col>




</Row>




</div>
</Col>

</Row>






 <Row>
   <Col lg="3" md="3" sm="6" xm="6">
<Songscard/>
   </Col>
<Col lg="1" md="1" sm="1" xm="1">

   </Col>



   <Col lg="3" md="3" sm="6" xm="6">
<Songscard/>
   </Col>
   <Col lg="1" md="1" sm="1" xm="1">

   </Col>

   <Col lg="3" md="3" sm="6" xm="6">
<Songscard/>
   </Col>
   
 </Row>


<br/><br/><br/><br/><br/><br/>    



          </Col>
        </Row>
        
    
             
       
        
      </div>
    </>
  );
}

export default LandingPage;
