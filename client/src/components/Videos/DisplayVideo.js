import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Header, Image } from 'semantic-ui-react';

const DisplayVideo = (props) => {
  const [ video, setVideo ] = useState([]);

  // useEffect(() => {
  //   axios.get(`/api/videos/${video_id}`)
  // }, [])

  return(
    <div>
      hello
    </div>
  )
};

export default DisplayVideo;
