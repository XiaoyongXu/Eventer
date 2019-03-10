import React from 'react';


export default function Chatbar(props) {

  return (

      <input className="chatbar-message"

        placeholder="Type a message and press ENTER"
        onChange={props.handleChange}
        onKeyUp={props.handleEnterPress}
        />

  )

}