import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import _ from "lodash";
import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [article, sortArticles] = useState(articles);
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => {
            sortArticles(_.orderBy(article, ["upvotes"], ["desc"]));
          }}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => {
            sortArticles(_.orderBy(article, ["date"], ["desc"]));
          }}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={article} />
    </div>
  );
}

export default App;
