import React from "react";
import styled from "styled-components/macro";

const Stream = () => {
  return (
    <IFrame
      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FPrySonerGG%2Fvideos%2F1191703617941733%2F&show_text=false&width=560&t=0"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen="true"
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
