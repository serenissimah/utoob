import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Header, Image, Card } from 'semantic-ui-react';


const DisplayVideo = (props) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios.get(`../api/videos/${video.id}`)
      .then(res => setVideo(res.data))
  }, [])

  return (
    <Card>
      <Card.Header>
        Title:
        {video.title}
      </Card.Header>
      <Card.Content>
        Description:
        {video.description}
      </Card.Content>
    </Card>
  )
};

export default DisplayVideo;
