import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components/macro";
import { getStreamSource } from "../utils/api";

const Stream = () => {
  const [streamSource, setStreamSource] = useState({
    src: "https://www.youtube.com/embed/xcJtL7QggTI",
  });

  useEffect(() => {
    const doFetch = async () => {
      const data = await getStreamSource();
      setStreamSource(data);
    };
    doFetch();
  }, []);
  return (
    <IFrame
      src={streamSource.src}
      scrolling="no"
      frameborder="0"
      allowfullscreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title="Livestream"
    ></IFrame>
  );
};

export default Stream;

const IFrame = styled.iframe`
  border: none;
  overflow: hidden;
  width: 560px;
  height: 314px;
`;
