import React from "react";
import { useFela } from "react-fela";
import styles from "./styles";
import Container from "../Container";

const Video = () => {
  const { css } = useFela();

  return (
    <Container>
      <video controls width="100%" height="auto">
        <source
          src="https://files.cargocollective.com/c1160975/Wthumbnail-1.m4v"
          type="video/mp4"
        />
      </video>
    </Container>
  );
};

export default Video;
