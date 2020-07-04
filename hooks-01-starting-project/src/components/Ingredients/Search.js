import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadIngredient } = props;
  const [enterFilter, setEnterFilter] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enterFilter === inputRef.current.value) {
        const queryParams =
          enterFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enterFilter}"`;
        axios.get(url + queryParams).then((response) => {
          const ingredientList = [];
          for (let key in response.data) {
            ingredientList.push({
              id: key,
              ...response.data[key],
            });
          }
          onLoadIngredient(ingredientList);
        });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enterFilter, onLoadIngredient]);

  const url =
    "https://reacthooks-practice-21b80.firebaseio.com/ingredients.json";

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enterFilter}
            onChange={(e) => setEnterFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
