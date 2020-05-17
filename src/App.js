import React, { Fragment } from 'react';
import './_App.scss';
import BorderCard from "./Components/BorderCard/BorderCard";
import Card from "./Components/Card/Card";
import Facebook from './Icon/IconFacebook';
import Twitter from './Icon/IconTwitter';
import Instagram from './Icon/IconInstagram';
import YouTube from './Icon/IconYoutube';
import IconDown from "./Icon/IconDown";
import IconUp from "./Icon/IconUp";
import Toogle from "./Components/Toggle/Toggle";

function App() {

    const toggleMode = () => {
        document.body.classList.toggle("light");
    };

  return (
      <Fragment>
          <div className="container">
              <h1>Social Media Dashboard</h1>
              <div className="header">
                  <p>Total Followers : 21,389</p>
                  <div>
                      <p className='dark-mode'> Dark Mode </p>
                      <Toogle click_event={toggleMode}/>
                  </div>
              </div>
              <div className="top-cards">
                  <BorderCard classes={'facebook'} icon={<Facebook/>} socialMedia="folake tee" followers='1987' followersTxt='followers' today="12 Today" icon2={<IconUp/>}/>
                  <BorderCard classes={'twitter'} icon={<Twitter/>} socialMedia="@mzzfolake" followers='1044' followersTxt='followers' today="99 Today" icon2={<IconUp/>}/>
                  <BorderCard classes={'instagram'} icon={<Instagram/>} socialMedia="@the_folake" followers='12k' followersTxt='followers' today="83 Today" icon2={<IconUp/>}/>
                  <BorderCard classes={'youtube'} icon={<YouTube/>} socialMedia="DiY with folake" followers='8901' followersTxt='subscribers' today="197 Today" icon2={<IconDown/>} brightRed/>
              </div>

              <h2>Overview - Today</h2>
              <div className="bottom-cards">
                  <Card infoText="Page Views" social={<Facebook/>} following="87" stat="3%" icon={<IconUp/>}/>
                  <Card infoText="Likes" social={<Facebook/>} following="52" stat="2%" brightRed icon={<IconDown/>}/>
                  <Card infoText="Likes" social={<Instagram/>} following="5678" stat="2258%" icon={<IconUp/>}/>
                  <Card infoText="Profile Views" social={<Instagram/>} following="52k" stat="1374%" icon={<IconUp/>}/>
                  <Card infoText="Retweets" social={<Twitter/>} following="117" stat="303%" icon={<IconUp/>}/>
                  <Card infoText="Likes" social={<Twitter/>} following="509" stat="553%" icon={<IconUp/>}/>
                  <Card infoText="Likes" social={<YouTube/>} following="107" stat="19%" brightRed icon={<IconDown/>}/>
                  <Card infoText="Total Views" social={<YouTube/>} following="1407" stat="12%" brightRed icon={<IconDown/>}/>
              </div>
          </div>

      </Fragment>
  );
}

export default App;
