import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import player from "components/Card/player.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import test from "./index-sections/test.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Selections from "views/examples/Selections.js";
import Profilecard from "components/Card/Profilecard.js";
import Profilelanding from "views/examples/Profilelanding.js";

import Upload from "views/examples/Upload.js";
import Song from "views/examples/Song.js";
import AProfile from "views/examples/AProfile.js";
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
       
    
    <BrowserRouter>
    
                <Switch>
     <Route path="/" exact component={LandingPage}   />
     <Route path="/signup"  component={SignUp}   />
     <Route path="/selections"  component={Selections}   />
     <Route path="/upload"  component={Upload}   />
     <Route path="/song"  component={Song}   />
     <Route path="/aprofile"  component={ProfilePage}   />
     <Route path="/test"  component={test}   />
     <Route path="/profilepage"  component={ProfilePage}   />
       <Route path="/profilecard"  component={Profilecard}   />
       <Route path="/profilelanding"  component={Profilelanding}   />
     {/* <Route path="/player"  component={player}   /> */}
   </Switch>

      </BrowserRouter>


    </>
  );
}

export default Index;
