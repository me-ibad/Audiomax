import React from 'react'
import {


  Modal,
  ModalBody,
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
function Newnav() {

   
    return (
    <div class="dropdown" >
    <a href="#" onclick="return false;" role="button" data-toggle="dropdown" id="dropdownMenu1" data-target="#"  aria-expanded="true">
        <i class="fa fa-bell-o bellicon" >
        </i>
    </a>
    <span class="badge badge-danger">6</span>
    <ul class="dropdown-menu dropdown-menu-left pull-right" role="menu" aria-labelledby="dropdownMenu1">
        <li role="presentation">
            <a href="#" class="dropdown-menu-header">Notifications</a>
        </li>
        <ul class="timeline timeline-icons timeline-sm" >
  
    <div class="ui feed">
  <div class="event">
    <div class="label">
      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
    </div>
    <div class="content">
      You added Elliot Fu to the group
      <a>Coworkers</a>
         <div class="date">1 Hour Ago</div>
    </div>
  </div>
</div>
    <div class="ui feed">
  <div class="event">
    <div class="label">
      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
    </div>
    <div class="content">
      You added Elliot Fu to the group
      <a>Coworkers</a>
         <div class="date">1 Hour Ago</div>
    </div>
  </div>
</div>
                                        
                                    </ul>
        <Button className="btn-link" color="primary">
                See all
              </Button>
    </ul>

</div>
    )
}

export default Newnav
