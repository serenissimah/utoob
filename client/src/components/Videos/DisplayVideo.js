import React from 'react'
import { Header, Card, Divider, Image } from 'semantic-ui-react'
import axios from 'axios'

class DisplayVideos extends React.Component {
  state = { videos: [], }

  componentDidMount() {
    axios.get('/api/videos')
      .then(res => this.setState({ videos: res.data, }))
  };



  render() {
    return (
      <>
        <Header>Render Videos</Header>
        <Card.Group itemsPerRow={4}>
          {this.state.videos.map(videos =>
          <Card key={videos.id} >
            <Image src={videos.trailer} />
            <Card.Content>
              <Divider />
              <Card.Header>{videos.title}</Card.Header>
            </Card.Content>
          </Card>
          )}
        </Card.Group>
      </>
    )
  }
}

export default DisplayVideos