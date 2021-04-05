import React from 'react';
import { useState } from 'react';
import Public from '../../src/layouts/Public';
import { TabContent, TabPane, Nav, CardImg, CardBody, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Media } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import PresentationSection from '../../src/sections/Services/presentation';
import NetworkingSection from '../../src/sections/Services/networking';
import PartenairesSection from '../../src/sections/Services/partenaires';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Head from "next/head";
import config from '../../src/config';
import PreInscription from "../../src/components/pre_inscription";

function  Services  ( )  {
  return (
    <>
    <Head>
        {/* META tags */}
        <title>Nos services | Shakazz</title>
        <meta
          name="description"
          content="Formations – investissements – informations"
        />
        <link
          rel="canonical"
          href={`${config.canonicalLink}/services`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nos Services | Shakazz" />
        <meta
          property="og:description"
          content="Formations – investissements – informations"
        />
        <meta
          property="og:image"
          content={`${config.seoShakazzLogo}`}
        />
        <meta
          property="og:url"
          content={`${config.canonicalLink}/services`}
        />
        <meta property="og:site_name" content="Shakazz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webpage" />
        <meta
          name="twitter:description"
          content="Formations – investissements – informations"
        />
      </Head>

     <div>
      	<div className="services_page_section_image">
          <div className="services_page_section_image_text">
            Découvrez nos services
          </div>
      	</div>
      <PreInscription/>
    	<PresentationSection/>
    	<NetworkingSection/>
    	<PartenairesSection/>
    </div>
   </> 
  )

}



Services.layout = Public;
export default Services;