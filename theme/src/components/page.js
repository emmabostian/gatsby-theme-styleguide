import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Page = ({ body }) => (
  <>
    <MDXRenderer>{body}</MDXRenderer>
  </>
);

export default Page;
