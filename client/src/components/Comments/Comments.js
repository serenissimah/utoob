import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Comment, } from 'semantic-ui-react';

const Comments = (props) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get(`/api/videos/${video_id}/comments`)
  }, [])

  return (
    <div>
      hello
    </div>
  )
}

export default Comments