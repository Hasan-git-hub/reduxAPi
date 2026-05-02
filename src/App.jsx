import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosUsers } from "./features/UsersSlice";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const { data, Loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(axiosUsers());
  }, [dispatch]);

  console.log(data, Loading, error);

  if (Loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  if (data.length === 0) {
    return <h1>No data</h1>;
  }

  return (
    <div className="cards min-h-screen p-6 flex flex-col gap-[60px]">
      <h1 className="text-2xl font-bold text-center">Users-API</h1>
      <div className="flex flex-wrap items-center justify-center gap-[35px] cards-container">
        {data.map((user) => (
          <div className="card p-4 shadow-md rounded-lg mb-4" key={user.id}>
            <h2 className="text-gray-600 text-[18px] font-bold">Name: {user.name}</h2>
            <p className="text-gray-200 text-[16px] font-semibold">Email: {user.email}</p>
            <p className="text-gray-200 text-[16px] font-semibold">Phone: {user.phone}</p>
            <p className="text-gray-200 text-[16px] font-semibold">Website: {user.website}</p>
            <p className="text-gray-200 text-[16px] font-semibold">Company: {user.company.name}</p>
            <p className="text-gray-200 text-[16px] font-semibold">City: {user.address.city}</p>
            <p className="text-gray-200 text-[16px] font-semibold">Street: {user.address.street}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
