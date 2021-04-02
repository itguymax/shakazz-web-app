import React from 'react'
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import Link from "next/link"
import moment from "moment";
import Image from "next/image"
const cardStyle = { width: "20rem" };
export default function ArticlePreview({data}) {
  const { slug, title, date, featuredImage } = data;
   let featuredImageUrl="";
  if(featuredImage){
   featuredImageUrl =  featuredImage.node.sourceUrl
  }
  return (
     <Link href={`/blog/${slug}`} style={{cursor: "pointer"}}>
      <Card >
        <CardImg
          alt={title}
          src= { featuredImageUrl || "/assets/img/theme/profile-cover.jpg" }
          top
        ></CardImg> 
      
        <CardBody>
          <CardTitle className="mb-0" style={{fontWeight: "bold", color:"#444444"}}>{data.title}</CardTitle>
          <CardText style={{fontWeight: "300", color:"#444444"}}>
            {title}
          </CardText>
          <p className=" mb-4" style={{fontSize:"14px"}}>
              {moment(date).format('YYYY/MM/DD')} 
            </p>
        </CardBody>
      </Card>
    </Link>
  )
}
