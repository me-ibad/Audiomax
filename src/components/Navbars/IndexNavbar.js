import React from "react";
import { Link } from "react-router-dom";
import {

} from 'react-bootstrap';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
   Modal,
   ModalBody,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import SignUp from "views/index-sections/SignUp.js";
function IndexNavbar() {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  function mod() {
    setModal1(false);
    setModal2(true)
  }
  return (
    <>
      <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">SignUp</h4>
                </div>
                <ModalBody>
              <br></br>   
<Row>
                
<Col lg="12" md="10">


<ul class="ul1">
  <li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-google"></i>
    </a>
  </li>
  <li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-facebook"></i>
    </a>
    </li>
  <li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-apple"></i>
    </a>
    
  </li >
  <li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-instagram"></i>
    </a> 
  </li>
<li class="li1">
    <a href="#" class="mylink">
      <i class="fab fa-whatsapp"></i>
    </a> 
  </li>



</ul>

</Col>

</Row>
     <br/>
<hr class="my-4"/>

 <Row>
 <Col lg="9" md="6" sm="6">
   <Label for="ShopName">Email<span className="sred">*</span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>

</Row><Row>

<Col lg="9" md="6" sm="6">
   <Label for="ShopName">Password<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
                    type="password"
                  ></Input>
                </FormGroup>
              </Col>
              </Row>


              <Row>

<Col lg="9" md="6" sm="6">
   <Label for="ShopName">Conform Password<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
                    type="password"
                  ></Input>
                </FormGroup>
              </Col>
              </Row>





<hr class="my-4"/>
<span className="marg1">Or</span>
<br/>
 <Row>

<Col lg="9" md="6" sm="6">
 <Button color="info"
className = "marg"
 onClick={() => mod()}
  // onClick={() => setModal2(true)}
 >SignUp Email</Button>
</Col>
</Row>


                </ModalBody>
                <div className="modal-footer">
                  <Button color="warning" type="button">
                    Continue
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>


  <Modal isOpen={modal2} toggle={() => setModal2(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">SignUp</h4>
                </div>
                <ModalBody>
                 <SignUp/>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="primary" type="button">
                    Submit
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>


 <Modal isOpen={modal3} toggle={() => setModal3(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Sign In</h4>
                </div>
                <ModalBody>
                <Row>
 <Col lg="9" md="6" sm="6">
   <Label for="ShopName">Email<span className="sred">*</span></Label>
               <FormGroup >
                  <Input
                    defaultValue=""
                    placeholder=""
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>

</Row><Row>

<Col lg="9" md="6" sm="6">
   <Label for="ShopName">Password<span className="sred">*</span></Label>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder = ""
                    type="password"
                  ></Input>
                </FormGroup>
              </Col>
              </Row>


              
                </ModalBody>
                <div className="modal-footer">
                  <Button color="primary" type="button">
                    Submit
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>







      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="primary">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href=""
              target="_blank"
              id="navbar-brand"
            >
              
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              By Encodersoft
            </UncontrolledTooltip>
          
          </div>

<div class="ui action left icon input">
    <input type="text" placeholder="Order #" />
    <i aria-hidden="true" class="search icon"></i>
    <button class="ui blue button">Search</button>
  </div>
          
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            
              <NavItem>
                <NavLink
                  href="#pablo"
                 onClick={() => setModal1(true)}
                >
                  {/* <i className="now-ui-icons users_circle-08"></i> */}
                  <p>SignUp</p>
                </NavLink>             
              </NavItem>
             
           <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={() => setModal3(true)}
                >
                  {/* <i className="now-ui-icons users_circle-08"></i> */}
                  <p>Sign In</p>
                </NavLink>             
              </NavItem>





<NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons ui-1_bell-53"></i>
                  
                </NavLink>


                
              </NavItem>
              
             
              <NavItem>
                <Button
                  className="nav-link btn-neutral btupload"
                  
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upload</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
