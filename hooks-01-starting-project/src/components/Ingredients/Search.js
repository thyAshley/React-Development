import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";
import useHttp from "../../hooks/http";
import ErrorModal from "./../UI/ErrorModal";

const Search = React.memo((props) => {
  const { onLoadIngredient } = props;
  const [enterFilter, setEnterFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();
  console.log(sendRequest);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enterFilter === inputRef.current.value) {
        const queryParams =
          enterFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enterFilter}"`;

        sendRequest(
          `https://reacthooks-practice-21b80.firebaseio.com/ingredients.json${queryParams}`,
          "GET"
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enterFilter, sendRequest, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const ingredientList = [];
      for (let key in data) {
        ingredientList.push({
          id: key,
          ...data[key],
        });
      }
      onLoadIngredient(ingredientList);
    }
  }, [data, isLoading, error, onLoadIngredient]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
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
