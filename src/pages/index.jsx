import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Home from "../components/home";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Futuredoctor - Study medicine abroad"} />
      <Home />
    </Wrapper>
  );
};

export default index;
