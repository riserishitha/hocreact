import React, { useState } from 'react'
import togetherComponent from './match'
 const LikeImage=(props)=> {
  return (
    <div>
      <button onClick={props.change}>Like Image {props.likeImageCounter}</button>
    </div>
  )
}
let callLikeImage  = togetherComponent(LikeImage)
export default callLikeImage;
