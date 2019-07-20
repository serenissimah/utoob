import React, { useState } from 'react';
import axios from 'axios';
import { Header, Image } from 'semantic-ui-react';
import Utoob from '../Images/Utoob.png';

const Video = (props) => {
	const [ video, setVideo ] = useState([]);
};

const DisplayVideo = () => (
  <>
  <Image src={Utoob} size='small'/>
  
	<Header as='h3' textAlign='center'>
    Video Title
		{/* {VideoTitle} */}
	</Header>
  </>
);

export default DisplayVideo;
