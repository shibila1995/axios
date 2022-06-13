import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    //get function
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //post function
  const postData = (e) => {
    e.preventDefault(); //so it will not reload the page  once i click post btn
    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body, // if frontend and server has different name write title :Title
    })
      .then((res) => console.log("posting data ::::", res.data))
      .catch((err) => console.log(err));
  };

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
      <form className="post-form">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <hr />
        <label>Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <hr />
        <button onClick={postData}>POST</button>
      </form>

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
