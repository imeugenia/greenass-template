import React from "react";
import { useFela } from "react-fela";
import styles from "./styles";

const Video = () => {
  const { css } = useFela();

  return (
    <div className={css(styles.container)}>
      <video controls width="100%" height="auto">
        <source
          src="https://files.cargocollective.com/c1160975/Wthumbnail-1.m4v"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
