import React from 'react';
import { Header, } from 'semantic-ui-react';
import DisplayVideo from './Videos/DisplayVideo';
// import Comments from './components/Comments/Comments'
import Axios from 'axios';
import ProfileVideos from './Videos/ProfileVideos';



const Home = () => ( 
  <>
    <Header as="h3" textAlign="center">UToob</Header>
    {/* {VideoTitle} */}
    {/* <Comments /> */}
    <ProfileVideos />
   
    </>
)

export default Home;
