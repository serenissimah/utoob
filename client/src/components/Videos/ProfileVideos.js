import React from 'react'
import { Header, Card, Divider, Image } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'
import axios from 'axios'
import DisplayVideo from './ProfileVideos'

class ProfileVideos extends React.Component {
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
            <Link to="/DisplayVideos">
              <Card key={videos.id} >
                <Image src={videos.trailer} />
                <Card.Content>
                  <Divider />
                  <Card.Header>{videos.title}</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          )}
        </Card.Group>
      </>
    )
  }
}

export default ProfileVideos