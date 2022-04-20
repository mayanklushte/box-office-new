import React, { useState } from "react";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import Title from "../components/Title";
import { apiGet } from "../misc/config";
import { SearchInput, RadioWrapper } from "./Home.styled";

const Home = () => {
  let [input, setInput] = useState("");
  let [result, setResult] = useState(null);
  let [serachOption, setSerachOption] = useState("shows");

  let isShowOption = serachOption === 'shows';
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  let getShows = () => {
    apiGet(`/search/${serachOption}?q=${input}`).then((result) => {
      setResult(result);
    });
  };

  let onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      getShows();
    }
  };

  let onRadioChange = (ev) => {
    setSerachOption(ev.target.value)
    console.log(serachOption)
  }

  let renderResult = (result) => {
    if (result && result.length === 0) {
      return <div>No result</div>;
    }
    if (result && result.length > 0) {
      return result[0].show ? (result.map((item) => {
        console.log(item.show);
        return <Cards key={item.show.id} data={item.show} />;
      })) : ("actor");
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

      <RadioWrapper>
        <input type="radio" value="shows" id="show-search" checked={isShowOption} onChange={onRadioChange} />
        <input type="radio" value="people" id="actor-search" checked={!isShowOption} onChange={onRadioChange} />
      </RadioWrapper>

      <div className="container">
        <div className="row">{renderResult(result)}</div>
      </div>
    </div>
  );
};

export default Home;
