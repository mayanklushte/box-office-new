import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 40px;
`;
const Image = styled.img`
  width: 100%;
`;

const ShowDetails = () => {
  const { id } = useParams();

  let [details, setDetails] = useState("");

  useEffect(() => {
    apiGet(`/shows/${id}`).then((result) => {
      setDetails(result);
    });
  }, [id]);

  return (
    <Container className="card">
      {details.image ? (
        <Image src={details.image.original} className="card-img-top" />
      ) : (
        "No image present"
      )}
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: details.summary }}
        />
      </div>
    </Container>
  );
};

export default ShowDetails;
