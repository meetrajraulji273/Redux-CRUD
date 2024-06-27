import React from "react";
import { useSelector } from "react-redux";
import './Popup.css'

const Popup = ({ id, showPopup, setShowPopup }) => {
  const allUsers = useSelector((state) => state.userDetails.users);

  const user = allUsers.find((user) => user.id === id);
  return (
    <div className="modalBackground text-center">
      <div className="modalContainer py-5">
        <button onClick={()=>setShowPopup(false)}>Close</button>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <h4>{user.age}</h4>
        <p>{user.gender}</p>
      </div>
    </div>
  );
};

export default Popup;
