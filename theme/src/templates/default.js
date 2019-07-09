import React from "react";
import { graphql } from "gatsby";
import Page from "../components/page";

// Declaring query here allows us to shadow components
export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      childMdx {
        body
      }
    }
  }
`;

const Default = ({ data }) => {
  const page = {
    body: data.file.childMdx.body
  };
  return <Page {...page} />;
};

export default Default;
