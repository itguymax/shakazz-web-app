import React, { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import settings from "../../src/__MOCK__/settings";
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Global,css} from "@emotion/react"
import {useAppContext} from "../../src/context";
import moment from "moment";
import Image from "next/image";
// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  Button,
  Table,
  Progress,
  Media,Jumbotron
} from "reactstrap";
// layout for this page
import Portal_Crypto from "../../src/layouts/Portal_Crypto.js";
// core components
import {
  chartOptions,
  parseOptions,
} from "../../variables/charts.js";
import { device } from '../../src/lib/device';
import  { Link } from "../../src/components/Link";
import  ToolipComp from "../../src/components/forms/Toolip";
import  LightBoxContainer from '../../src/components/common/lightBoxContainer';
import DashboardWallets from '../../src/components/DashboardWallets';
import ProgressBar from "../../src/components/ProgressBar";
import { currentUser } from "../../src/__MOCK__/user";
import { isDirective } from "graphql";
import withAuth from '../../src/hoc/withAuth';
import { constantes  } from "../../src/config/";
import {  useFetchAlltransactions,useFetchUserInfos } from "../../src/hooks";
import DataLoader from "../../src/components/common/DataLoader";
let c;
function Dashboard( props ) {
  const context = useAppContext();
  const { data: userData, isLoading: userDataLoading } = useFetchUserInfos(context.appState.accessToken);
  const {mutateAsync: allMutation, isLoading } = useFetchAlltransactions();
  const [token, setToken]= useState(context.appState.accessToken);

  return (
    <Portal_Crypto>
    <Global
    styles={css`
    `}
  />
      <Container>
      <br/>
      <center><h1>Mes achats</h1></center>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Crypto</th>
            <th>Montant</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>07/10/2021</td>
            <td>100$</td>
            <td>En attente</td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </Portal_Crypto>
  )
}

export default withAuth(Dashboard);
