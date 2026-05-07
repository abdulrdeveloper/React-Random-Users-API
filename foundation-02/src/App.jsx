import { useState, useEffect } from "react";
import "./App.css";

// const shows = [
//   {
//     id: 1,
//     title: "The Component Returns",
//     time: "10:00 AM",
//     hall: "Hall A",
//   },
//   {
//     id: 2,
//     title: "Attack of the Re-render",
//     time: "12:30 PM",
//     hall: "Hall B",
//   },
//   {
//     id: 3,
//     title: "Virtual DOM Nights",
//     time: "04:00 PM",
//     hall: "Hall C",
//   },
// ];

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random")
      .then((res) => res.json())
      .then((data) => {console.log(data);useState[data]})
      .catch((err) => {console.log("Error:", err);});
  }, []);

return (
  <div>
    <section className="grid"></section>
    <section className="grid">
      {shows.map((show) => (
        <div className="card">
          <span className="muted">{show.title}</span>
          <h2 className="title">{show.time}</h2>
          <p className="tag">{show.hall}</p>
        </div>
      ))}
    </section>
  </div>
);
}
export default App;
