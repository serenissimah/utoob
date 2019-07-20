import React from 'react';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
// import Home from './Home';
import ProfileVideos from './components/Videos/ProfileVideos';
import DisplayVideo from './components/Videos/DisplayVideo';
import VideoForm from './components/Videos/VideoForm';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={ProfileVideos} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/videos/:id" component={DisplayVideo} />
          <Route exact path="/newvideo" component={VideoForm} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;