import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "dotenv/config";
const Search = ({ page }) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [dataResult, setDataResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [apage, setPage] = useState(page);
  const [a, setA] = useState(false);
  // console.log("check input ", searchQuery);
  console.log("check page search ", page);

  // console.log(`check value bf ${searchQuery}`);
  useEffect(() => {
    console.log("check apage search ", apage);
    console.log("check a ", a);
    setPage(page);
    if (a === true) {
      setPage(1);
    }
    setA(false);
    var url = `https://api.unsplash.com/search/photos/?page=${apage}&query=react&client_id=4PYFdyOl-1xu-XpoWGEzZtNydvi7lCLB5zdXSK6vLhI`;
    if (searchQuery !== "") {
      url = `https://api.unsplash.com/search/photos/?page=${apage}&query=${searchQuery}&client_id=4PYFdyOl-1xu-XpoWGEzZtNydvi7lCLB5zdXSK6vLhI`;
    }
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
          // console.log(`check value at ${searchQuery}`);
          setPage(1);
          setA(true);
          setDataResult([]);
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
