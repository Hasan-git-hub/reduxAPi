import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosUsers } from "./features/UsersSlice";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const { data, Loading, error } = useSelector((state) => state.users);
  const [ email, setEmail ] = React.useState("");
  const [ name, setName ] = React.useState("");

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

  const handleAddUser = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        { email, name }
      );
      const newUser = response.data;
      dispatch({ type: "users/postUsers/fulfilled", payload: newUser });
      setEmail("");
      setName("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="cards min-h-screen p-6 flex flex-col gap-[40px]">
      <h1 className="text-2xl font-bold text-center">Users-API</h1>
      <input value={email} onChange={(e) => {
        setEmail(e.target.value);
      }} type="text" placeholder="Email:" className="w-3/12 bg-gray-600 text-black placeholder:text-gray-400 border-[2px] border-gray-900 rounded-[10px] p-2 transition-all duration-200 ease-in self-center focus:bg-gray-400 " />
      <input value={name} onChange={(e) => {
        setName(e.target.value);
      }} type="text" placeholder="Name:" className="w-3/12 bg-gray-600 text-black placeholder:text-gray-400 border-[2px] border-gray-900 rounded-[10px] p-2 transition-all duration-200 ease-in self-center focus:bg-gray-400 " />
      <button onClick={handleAddUser} className="w-2/12 bg-gray-400 text-black border-2 border-gray-900 rounded-2xl p-2 transition-all duration-300 ease-in-out self-center hover:bg-gray-600 ">Add User</button>
      <div className="flex flex-wrap items-center justify-center gap-[35px] cards-container">
        {data.map((user) => (
          <div className="card p-4 shadow-md rounded-lg mb-4" key={user.id}>
            <h2 className="text-gray-600 text-[18px] font-bold">Name: {user.name}</h2>
            <p className="text-gray-200 text-[16px] font-semibold">Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
