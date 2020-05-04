import React from 'react'
import Sidebar from "components/Sidebar/Sidebar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import {
    Button,
    Input, Container,
    Row,
    Col
    }
    from "reactstrap";
function Song() {
    return (

<div>
  <IndexNavbar />
            <Row>
          <Col lg="3" md="3" sm="2" xs="2">
<Sidebar/>

</Col>
        
           

          <Col md="8" lg="8"  sm="10" xs="10">
<br/>
<br/>
             <Row>

         <Col md="12" lg="12"  sm="11" xs="11">

   < div className = "card-landing"
   style = {
       {
           backgroundImage: "url(" + require("assets/img/bg4.jpg") + ")"
       }
   } >
        
       <Row>


  <Col lg="3" md="3" sm="3" xs="2">
       <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
                
      
      </Col>


<Col lg="9" md="9" sm="9" xs="9">
<div className="mobres">
<Row>
    <Col lg="9" md="9" sm="9" xs="9">

        <span className="snam">Samio</span>
    </Col>

<Col lg="3" md="3" sm="3" xs="3">

         <button class="ui facebook circular icon button">
    <i aria-hidden="true" class="facebook icon"></i>
  </button>
  <button class="ui twitter circular icon button">
    <i aria-hidden="true" class="twitter icon"></i>
  </button>
    </Col>






</Row>

<Row>
    <Col lg="9" md="9" sm="9" xs="9">

        <span className="singnm">eminem</span>
    </Col>
</Row>
<Row>
    <Col lg="9" md="9" sm="9" xs="9">

        <h3>Singer name</h3>
    </Col>
</Row>


<Row>
 <Col lg="9" md="9" sm="9" xs="9">
<div class="container-audio">
    <Row>
        <Col md="12">
        
</Col>
</Row>

 <Row>
        <Col lg="12">
<div class="now playing" id="music">
  <span class="bar n1">A</span>
  <span class="bar n2">B</span>
  <span class="bar n3">c</span>
  <span class="bar n4">D</span>
  <span class="bar n5">E</span>
  <span class="bar n6">F</span>
  <span class="bar n7">G</span>
  <span class="bar n8">H</span>
    <span class="bar n9">H</span>
    <span class="bar n10">H</span>
    <span class="bar n11">H</span>
    <span class="bar n12">H</span>
    <span class="bar n13">H</span>
    <span class="bar n14">H</span>
    <span class="bar n15">H</span>
    <span class="bar n16">H</span>
    <span class="bar n17">H</span>
    <span class="bar n18">H</span>
    <span class="bar n19">H</span>
    <span class="bar n20">H</span>


</div>
</Col></Row>


    </div>
    </Col>



</Row>




</div>



     </Col>
   
       </Row>









      </div>









      </Col>

      </Row>
      <div className="socison">
  <div class="ui right labeled button" role="button" tabindex="0">
    <button class="ui red button">
      <i aria-hidden="true" class="heart icon"></i>
      
    </button>
    <a class="ui red left pointing basic label">2,048</a>
  </div>

  <div class="ui right labeled button" role="button" tabindex="0">
        
    <button class="ui blue basic button">
      <i aria-hidden="true" class="comments icon"></i>
      
    </button>
    <a class="ui blue left pointing basic label">2,048</a>
  </div>
</div>



<br/>
<Row>
         <Col md="10" lg="10"  sm="10" xs="11">

<div class="ui comments">
  <h3 class="ui dividing header">Comments</h3>
  <div class="comment">
    <div class="avatar">
      <img src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
    </div>
    <div class="content">
      <a class="author">Matt</a>
      <div class="metadata"><div>Today at 5:42PM</div></div>
      <div class="text">How artistic!</div>
      <div class="actions"><a class="">Reply</a></div>
    </div>
  </div>
  <div class="comment">
    <div class="avatar">
      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
    </div>
    <div class="content">
      <a class="author">Elliot Fu</a>
      <div class="metadata"><div>Yesterday at 12:30AM</div></div>
      <div class="text"><p>This has been very useful for my research. Thanks as well!</p></div>
      <div class="actions"><a class="">Reply</a></div>
    </div>
    <div class="ui comments">
      <div class="comment">
        <div class="avatar">
          <img src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
        </div>
        <div class="content">
          <a class="author">Jenny Hess</a>
          <div class="metadata"><div>Just now</div></div>
          <div class="text">Elliot you are always so right :)</div>
          <div class="actions"><a class="">Reply</a></div>
        </div>
      </div>
    </div>
  </div>
  <div class="comment">
    <div class="avatar">
      <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
    </div>
    <div class="content">
      <a class="author">Joe Henderson</a>
      <div class="metadata"><div>5 days ago</div></div>
      <div class="text">Dude, this is awesome. Thanks so much</div>
      <div class="actions"><a class="">Reply</a>
      
      </div>
      
    </div>
  </div>
  <form class="ui reply form">
    <div class="field"><textarea rows="3"></textarea></div>
    <button class="ui icon primary left labeled button">
      <i aria-hidden="true" class="edit icon"></i>
      Add Reply
    </button>
  </form>
</div>

             </Col>





             </Row>






      </Col>
      </Row>
  
      
</div>
    )
}

export default Song
