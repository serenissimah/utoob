import React from 'react';
import { Header, } from 'semantic-ui-react';
import DisplayVideo from './Videos/DisplayVideo';
import Axios from 'axios';
import ProfileVideos from './Videos/ProfileVideos';



const Home = () => ( 
  <>
    <Header as="h3" textAlign="center">UToob</Header>
    <ProfileVideos />
   
    </>
)

export default Home;
