import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";
let App = function App() {
  const [page, setPage] = useState(1);
  useEffect(() => {
    const onScroll = (e) => {
      console.log(
        "check document.body.scrollHeight ",
        document.body.scrollHeight
      );
      console.log("check window.innerHeight ", window.innerHeight);
      console.log("check window.scrollY ", window.scrollY);
      if (
        window.scrollY >= document.body.scrollHeight - window.innerHeight &&
        e.deltaY >= 0
      ) {
        console.log("User has scrolled to the bottom of the page!");
        setPage(page + 1);
      }
    };
    // clean up code
    window.removeEventListener("wheel", onScroll);
    window.addEventListener("wheel", onScroll, { passive: true });
    return () => window.removeEventListener("wheel", onScroll);
  }, [page]);
  // console.log("document.height ", document.body.scrollHeight);
  console.log("check page app ", page);
  return (
    <div className="App">
      <Search page={page} />
    </div>
  );
};
// first commit
export default App;
