import React from 'react';
import { Header, } from 'semantic-ui-react';
import DisplayVideo from './Videos/DisplayVideo';
// import Comments from '../components/comments/Comments'
import Axios from 'axios';
import ProfileVideos from './Videos/ProfileVideos';



const Home = () => ( 
  <>
  <div style={{backgroundColor: "#DCDCDC"}}>
    <h1 style={{padding: "25px 0 25px 25px"}}>All videos</h1>
    {/* <Header as="h3" textAlign="center">UToob</Header> */}
    {/* {VideoTitle} */}
    {/* <Comments */}
    <ProfileVideos />
    
    {/* // video_id={video.id} */}
  </div>
    </>
)

export default Home;




