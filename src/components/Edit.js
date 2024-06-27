import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../features/userDetails/userDetailsSlice";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [updatedData, setUpadatedData] = useState();

  const { users, loading } = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (id) {
      const user = users.find((user) => user.id == id);
      setUpadatedData(user);
    }
  }, []);

  const handleChange = (e) => {
    setUpadatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(updatedData))
    navigate('/')
  }
  return (
    <div>
      <h2 className="my-2 text-center">Edit the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updatedData && updatedData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updatedData && updatedData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            name="age"
            className="form-control"
            value={updatedData && updatedData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            id="male"
            type="radio"
            checked={updatedData && updatedData.gender === "Male"}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            id="female"
            checked={updatedData && updatedData.gender === "Female"}
            onChange={handleChange}
            type="radio"
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    </div>
  );
};

export default Edit;
