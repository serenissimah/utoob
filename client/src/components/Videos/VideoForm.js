import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Form, Button, Card, Image } from 'semantic-ui-react';
import { Link, } from "react-router-dom";
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { AuthConsumer } from '../../providers/AuthProvider';

const VideoForm = (props) => {
  const videoState = {
    title: "",
    description: "",
  }
    
  const [video, setVideo] = useState("")
  const [title, setTitle] = useState("");
  const [duration, setDuration ] = useState("")
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("")
  const [trailer, setTrailer] = useState("")

  
  const handleChange = (name) => (e) => {
    // const { value, } = e.target;
    setVideo({...video, [name]: e.target.value})
  }

  const  handleSubmit = (e) => {
    e.preventDefault();
    const {title, description, genre, trailer, duration} = video
    let data = new FormData()
    data.append("title", title);
    data.append("genre", genre);
    data.append("description", description);
    data.append("trailer", trailer);
    data.append("duration", duration);
    data.append("user_id", props.auth.user.id)

    axios.post("/api/videos", data)
      .then( res => {
        setTitle("")
        setDescription("")
        setGenre("")
        setDuration("")
        setTrailer("")
      })
      .catch(err => {
        console.log("Error")
      })
      setTitle("")
      setDescription("")
      setGenre("")
      setDuration("")
      setTrailer("") 
  }



  const renderAddForm = () => {
    return (
      
      <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input
          label='Title'
          placeholder='What best describes the content of the video?'
          name='title'
          // required
          value={video.title}
          onChange={handleChange("title")}/>

        <Form.Input
            label='Duration'
            placeholder='Duration'
            name='duration'
            value={video.duration}
            onChange={handleChange("duration")}/>

  <     Form.Input
            label='genre'
            placeholder='What best describes the content of the video?'
            name='genre'
            // required
            value={video.genre}
            onChange={handleChange("genre")}/>  

        <Form.Input
            label='description'
            placeholder='What best describes the content of the video?'
            name='description'
            // required
            value={video.description}
            onChange={handleChange("description")}/>

        <Form.Input
            label='trailer'
            placeholder='What best describes the content of the video?'
            name='trailer'
            // required
            value={video.trailer}
            onChange={handleChange("trailer")}/>

      </Form.Group>
      <Form.Button as={Link} to={"/"}>Submit</Form.Button>
      </Form>
)
    }



  return(
    <>
    {renderAddForm()}
    </>
  )
  
  }

export default class ConnectedVideoForm extends React.Component {
  render() {
    return(
      <AuthConsumer>
        { auth =>
          <VideoForm {...this.props} auth={auth} />
        }
      </AuthConsumer>  
    )
  }
}