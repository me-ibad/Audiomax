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
            <li>                                 
              <a href="">
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                <span className="nav-text">News</span>
              </a>
            </li>   
            <li>                                 
              <a href="">
                <i className="fa fa-fire fa-lg" />
                <span className="nav-text">Trending</span>
              </a>
            </li>   
            
            <li className="darkerlisheadow">
              <a href="">
                <i className="fa fa-music fa-lg" />
                <span className="nav-text">Top Songs</span>
              </a>
            </li>
            <li className="darkefrli">
              <a href="">
                <i className="fa fa-play-circle fa-lg" />
                <span className="nav-text">Top Mixtape</span>
              </a>
            </li>
            <li className="darkerdli">
              <a href="">
                <i className="fa fa-folder-open fa-lg" />
                <span className="nav-text">Top Albums</span>
              </a>
            </li>
            <li className="darkefsrli">
              <a href="">
                <i className="fa fa-fast-forward" />
                <span className="nav-text">Top Playlist</span>
              </a>
            </li>
            <li className="darkerfli">
              <a href="">
                <i className="fa fa-microphone fa-lg" />
                <span className="nav-text">Top Podcast</span>
              </a>
            </li>
            <li className="darkferli">
              <a href="">
                <i className="fa fa-reddit-alien fa-lg" />
                <span className="nav-text">Radio Station</span>
              </a>
            </li>
            <li className="darkferli">
              <a href="">
                <i className="fa fa-picture-o fa-lg" />
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
