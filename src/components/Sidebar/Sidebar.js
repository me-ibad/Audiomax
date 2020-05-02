import React from 'react'
import "assets/demo/sidebar.css";

function Sidebar() {
    
    return (
        <div className="sidebar">
        
      <nav className="main-menu">
        <div>
          <a className="logo" href="">
          </a> 
        </div> 
        <div className="settings" />
        <div className="scrollbar" id="style-1">
          <ul>
            <li>                                   
              <a href="">
                <i className="fa fa-home fa-lg" />
                <span className="nav-text">Home</span>
              </a>
            </li>   
            <li className="limargtop">                                 
              <a href="">
                <span class="icon-newspaper iconmarg1"></span>
                <span className="nav-text">News</span>
              </a>
            </li>   
            <li className="limargtop">                                 
              <a href="">
              <span class="icon-arrow iconmarg1"></span>
                <span className="nav-text">Trending</span>
              </a>
            </li>   
            
            < li className = "darkerlisheadow limargtop" >
              <a href="">
                <i className="fa fa-music fa-lg" />
                <span className="nav-text">Top Songs</span>
              </a>
            </li>
            < li className = "darkefrli limargtop" >
              <a href="">
               <span class="icon-album-3 iconmarg1"></span>
                <span className="nav-text">Top Mixtape</span>
              </a>
            </li>
            < li className = "darkerdli limargtop" >
              <a href="">
                <span class="icon-album iconmarg1"></span>
                <span className="nav-text">Top Albums</span>
              </a>
            </li>
            < li className = "darkefsrli limargtop" >
              <a href="">
                 <span class="icon-music-album iconmarg1"></span>
                <span className="nav-text">Top Playlist</span>
              </a>
            </li>
            < li className = "darkerfli limargtop" >
              <a href="">
               <span class="icon-podcast iconmarg1"></span>
                <span className="nav-text">Top Podcast</span>
              </a>
            </li>
            <li className="darkferli   ">
              <a href="">
                <i className="fa fa-reddit-alien fa-lg" />
                <span className="nav-text">Radio Station</span>
              </a>
            </li>
            < li className = "darkferli limargtop" >
              <a href="">
                <span class="icon-carnival-mask iconmarg1"></span>
                <span className="nav-text">Carvinal</span>
              </a>
            </li>
            <li className="darfkerli">
              <a href="">
                <i className="fa fa-align-left fa-lg" />
                <span className="nav-text">Recently Added
                </span>
              </a>
            </li>
            <li className="darkferli">
              <a href="">
                <i className="fa fa-user-circle-o fa-lg" />
                <span className="nav-text">Top Accounts</span>
              </a>
            </li>
            <div class="ui divider"></div>

            <li className="darkerlidshadowdown">
              <a href="">
                <i className="fa fa-youtube-play fa-lg" />
                <span className="nav-text">Youtube</span>
              </a>
            </li>
          </ul>
          <li>
            <a href="">
              <i className="fa fa-facebook fa-lg" />
              <span className="nav-text">Facebook</span>
            </a>
          </li>   
<li>
            <a href="">
              <i className="fa fa-instagram fa-lg" />
              <span className="nav-text">Instagram</span>
            </a>
          </li> 




          <ul className="logout">
            <li>
              <a href="">
                <i className="fa fa-twitter fa-lg" />
                <span className="nav-text">
                  Twitter 
                </span>
              </a>
            </li>  
          </ul>
        </div></nav>
        </div>
    )
}

export default Sidebar
