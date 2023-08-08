import React from "react";

const AVATAR_URL = "https://avatars.dicebear.com/api/adventurer/";
function Contact(props) {
  return (
    <li style={{listStyle:'none',display:'flex',alignContent:'center',justifyContent:'space-between'}}>
      <img src={`${AVATAR_URL} ${props.avatar}`} alt="image" style={{width:140}}/>
      <div>
        <h2 style={{fontSize:15}}>{props.name}</h2>
        <h2 style={{fontSize:19}}>{props.num}</h2>
      </div>
    </li>
  );
}

export default Contact;
