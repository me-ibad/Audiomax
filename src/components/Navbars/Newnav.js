import React from 'react'

function Newnav() {

   
    return (
       <div class="ui secondary menu">
 <div>
  <img
    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
    class="ui avatar image"
  />
  
</div>
  <a class="item">Messages</a>
  <a class="item">Friends</a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search..." />
        <i aria-hidden="true" class="search icon"></i>
      </div>
    </div>
    
  </div>
</div>
    )
}

export default Newnav
