import React, { useEffect, useState } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  //whenever user update term, then cancel timeout
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    //creat function
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  //   //run this whenever term change
  //   useEffect(() => {
  //     //creat function
  //     const search = async () => {
  //       const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //         params: {
  //           action: "query",
  //           list: "search",
  //           origin: "*",
  //           format: "json",
  //           srsearch: term,
  //         },
  //       });
  //       setResults(data.query.search);
  //     };

  //     if (term && !results.length) {
  //       search();
  //     } else {
  //       //prevent error when we dont have a search term
  //       //settime to seach after 1000ms
  //       const timeoutId = setTimeout(() => {
  //         if (term) {
  //           //call function
  //           search();
  //         }
  //       }, 1000);

  //       //clear the timeout when input term change
  //       return () => {
  //         clearTimeout(timeoutId);
  //       };
  //     }
  //   }, [term, results.length]);

  const renderResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
}

export default Search;

//useEffect is allow function component to do something like lifecycle method
