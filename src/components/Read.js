import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetails/userDetailsSlice";
import Popup from "./Popup/Popup";
import { Link } from "react-router-dom";

const Read = () => {
  const [id, setId] = useState();
  const [showPopup,setShowPopup] = useState(false);

  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(showUser());
  },[]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  
  return (
    <div>
      <h2>All data</h2>

      {showPopup && <Popup id={id} showPopup={showPopup} setShowPopup={setShowPopup}/>}

      {users &&
        users.map((user) => (
          <div className="card w-50 mx-auto my-2 text-center" key={user.id}>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
              <p className="card-text">{user.gender}</p>
              <button className="card-link" onClick={() =>{
                 setId(user.id);
                 setShowPopup(true);
              }}>
                View
              </button>
              <Link to={`/edit/${user.id}`} className="card-link">
                Edit
              </Link>
              <button className="card-link" onClick={()=>{
                dispatch(deleteUser(user.id))
              }}>
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Read;
