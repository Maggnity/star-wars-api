import React from "react";
import Films from "../../components/Films/Films";
import People from "../../components/People/People";

import Head from "../../components/Header/HeaderBackground";

function Home() {
  return (
    <React.Fragment>
      <Head className="head" />
      <Films />
      <People className=""/>
    </React.Fragment>
  );
}

export default Home;
