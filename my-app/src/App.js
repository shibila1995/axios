import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //now we r rendering
  const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h1>Lets use axios</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {arr}
      </table>
    </div>
  );
}

export default App;
