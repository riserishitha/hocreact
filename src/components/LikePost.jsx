import React, { useState } from 'react'
import togetherComponent from './match'
 const LikePost=(props)=> {
  return (
    <div>
      <button onClick={props.change}>Like Post {props.likeImageCounter}</button>
    </div>
  )
}
let callLikeImage  = togetherComponent(LikePost)
export default callLikeImage;
