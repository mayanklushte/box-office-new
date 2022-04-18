import React from "react";
import styled from "styled-components";

let Image = styled.img``;

const Cards = ({ data }) => {
  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "18rem " }}>
        <div className="card-body">
          {data.image ? <Image src={data.image.medium} /> : "No Image Foun"}
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
