import React, { Component } from "react";
import Router from "next/router";
import {
  Button
} from "reactstrap";  
import Public from '../src/layouts/Public';
import UserHeader from '../src/components/Headers/UserHeader';
import SEO from '../src/components/Seo';

function Index() {
  // React.useEffect(() => {
  //   Router.push("/portal/dashboard");
  // });
  return <>
      <SEO
          description="Shakazz crowd lending platforme"
          title="Shakazz"
        />
      <UserHeader/>
    
  </>
}

Index.layout = Public;
export default Index;