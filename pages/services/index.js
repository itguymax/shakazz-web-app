import React from 'react';
import { useState } from 'react';
import Public from '../../layouts/Public';
import { TabContent, TabPane, Nav, CardImg, CardBody, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Media } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import { UncontrolledCarousel } from 'reactstrap';
import PresentationSection from '../../components/Sections/Services/presentation';
import NetworkingSection from '../../components/Sections/Services/networking';
import PartenairesSection from '../../components/Sections/Services/partenaires';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

function Services () {
	//
  return (
    <div>
      	<div className="services_page_section_image">
      	</div>
    	<PresentationSection/>
    	<NetworkingSection/>
    	<PartenairesSection/>
    </div>
  )
}

Services.layout = Public;
export default Services;