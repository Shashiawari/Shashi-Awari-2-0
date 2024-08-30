import React from 'react'
import "./img.css"
const Imagecontainer = ({link,text}) => {
  return (
    <div className='imgcontainer'>
      <img src={link} className='imgsc mx-2' ></img>
      <h2 className='clas'>{text}</h2>
    </div>
  )
}

export default Imagecontainer
