import React, { useEffect, useRef, useState } from "react";
import axios from "../../../node_modules/axios/index";
import { AqiBanner } from "./components/aqibanner/AqiBanner";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import GlobalStyle from "./globalStyles";

export const fitchUsers = async (numberOfResults) => {
  try {
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=${numberOfResults}`
    );
    console.log(data);
    console.log("here");

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const AppDome = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  const [currentR, setCurrentR] = useState(1);
  // const [name, setN(ame] = useState("");
  const callFitchUsers = useRef(() => {});
  callFitchUsers.current = async () => {
    const data = await fitchUsers(currentR);
    console.log(data);

    setUsers(data);
    // setName(data.results[0].name);
  };

  useEffect(() => {
    callFitchUsers.current();
    // const data = fitchUsers();

    // setUsers(data);
  }, [currentR]);
  // const { name, phone, picture } = users.results[0];

  return (
    <div>
      {/* <GlobalStyle />
      <Navbar />
      <Sidebar />
      <AqiBanner /> */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          // width: "50%",
        }}
      >
        {/* <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}> increase</button> */}

        {/* <p>{JSON.stringify(users, null, "\t")}</p> */}

        <ul>
          {users.results &&
            users.results.map((user, index) => (
              <li>name: {user.name.first}</li>
            ))}

          {/* <li>phone: {phone}</li>
          <li style={{ display: "flex", justifyContent: "center" }}>
            <img src={picture.thumbnail} alt={name.first} />
          </li> */}
        </ul>

        <button onClick={() => setCurrentR(currentR + 1)}>more name</button>
      </div>
    </div>
  );
};
