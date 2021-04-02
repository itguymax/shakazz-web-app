import React, { Component } from "react";
import Router from "next/router";
import {css} from '@emotion/react'
export default function Error404() {
  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <h1>NOT FOUND</h1>
      <p>{`You just hit a route that doesn't exist... the sadness.`}</p>
    </div>
  );
}
