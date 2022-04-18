import React, { useState } from "react";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import Title from "../components/Title";
import { apiGet } from "../misc/config";
import { SearchInput } from "./Home.styled";

const Home = () => {
  let [input, setInput] = useState("");
  let [result, setResult] = useState(null);

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  let getShows = () => {
    apiGet(`/search/shows?q=${input}`).then((result) => {
      setResult(result);
    });
  };

  let onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      getShows();
    }
  };

  let renderResult = (result) => {
    if (result && result.length === 0) {
      return <div>No result</div>;
    }
    if (result && result.length > 0) {
      return result.map((item) => {
        console.log(item.show);
        return <Cards key={item.show.id} data={item.show} />;
      });
    }
  };

  return (
    <div>
      <Nav />
      <Title />
      <SearchInput
        type="text"
        placeholder="search of shows/actors"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div className="container">
        <div className="row">{renderResult(result)}</div>
      </div>
    </div>
  );
};

export default Home;
