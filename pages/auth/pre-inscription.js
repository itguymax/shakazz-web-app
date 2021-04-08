import React, { Component } from "react";
import Router from "next/router";
import {css} from '@emotion/react'
import Pi from "../../src/components/pre_inscription"
export default function PreInscription() {
  return (
    <div>
      <div
        className="mb-5"
        style={{
          minHeight: "600px",
          backgroundImage: 
             "url(" + "/assets/img/enconstruction.png" + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
       
      </div>
      <Pi bleu/>
    </div>
  );
}
