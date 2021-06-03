import React from "react";
import styled from "styled-components/macro";

const Contact = () => {
  return (
    <Body>
      <h1>Kontakt</h1>
      <div>
        <h2>Ortsgemeindeverwaltung Stahlhofen</h2>
        <p>Ansprechpartner: Ortsbürgermeister Patrick George</p>
        <p>Ringstraße 8</p>
        <p>56412 Stahlhofen</p>
        <p>Tel: 02602 / 917 163</p>
        <p>
          eMail:{" "}
          <FlowLink href="mailto:og-stahlhofen@gmail.com">
            og-stahlhofen@gmail.com
          </FlowLink>
        </p>
      </div>
      <div>
        <h2>Technik</h2>
        <p>Eventservice Mario Bachmeier</p>
        <p>Südring 23</p>
        <p>56412 Ruppach-Goldhausen</p>
        <p>Tel: 02602 / 1 69 15</p>
        <p>
          eMail:{" "}
          <FlowLink href="mailto: info@eventservice-mb.de">
            info@eventservice-mb.de
          </FlowLink>
        </p>
      </div>
    </Body>
  );
};

export default Contact;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 900px) {
    margin: 50px 20%;
  }
  @media screen and (max-width: 900px) {
    margin: 20px 0;
  }
`;

const FlowLink = styled.a`
  color: #e31e25;
`;
