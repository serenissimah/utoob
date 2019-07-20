import React, { useState } from 'react';
import axios from 'axios';
import { Header, Image } from 'semantic-ui-react';
import Utoob from '../Images/Utoob.png';
import Comments from '../comments/Comments'

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
  <Comments />
  </>
);

export default DisplayVideo;
