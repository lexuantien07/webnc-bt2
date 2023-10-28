import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "dotenv/config";
const Search = ({ page }) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [dataResult, setDataResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  // console.log("check input ", searchQuery);
  // console.log("check page search ", page);
  var url = `https://api.unsplash.com/search/photos/?page=${page}&query=react&client_id=4PYFdyOl-1xu-XpoWGEzZtNydvi7lCLB5zdXSK6vLhI`;
  if (searchQuery !== "") {
    url = `https://api.unsplash.com/search/photos/?page=${page}&query=${searchQuery}&client_id=4PYFdyOl-1xu-XpoWGEzZtNydvi7lCLB5zdXSK6vLhI`;
  }

  useEffect(() => {
    setLoading(true);
    const myTimeout = setTimeout(() => {
      fetch(
        // `https://api.unsplash.com/search/photos/?page=${page}&query=${searchQuery}&client_id=4PYFdyOl-1xu-XpoWGEzZtNydvi7lCLB5zdXSK6vLhI`
        url
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (page === 1) {
            setDataResult(data.results);
          } else {
            setDataFetch(data.results);
            setDataResult([...dataResult, ...dataFetch]);
          }

          setLoading(false);
        });
    }, 2000);

    // if (page !== 1) {
    // }
    console.log("check data result ", dataResult);
  }, [searchQuery, page]);
  // const handleInputChange = () => {

  // }

  return (
    <div>
      <input
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <h1>Search Results</h1>
      {dataResult.map((item) => (
        <img
          key={item.id}
          src={item.links.download}
          alt="a"
          style={{
            width: "400px",
            height: "400px",
            margin: "20px",
          }}
        />
      ))}
      <div>{loading ? <div className="loader"></div> : ""}</div>
    </div>
  );
};

export default Search;
