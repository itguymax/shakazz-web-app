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
import {css} from "@emotion/react"
const cardStyle = { width: "20rem" };
export default function ArticlePreview({data}) {
  const { slug, title, date, featuredImage, excerpt } = data;
   let featuredImageUrl="";
  if(featuredImage){
   featuredImageUrl =  featuredImage.node.sourceUrl
  }
  return (
     <Link href={`/blog/${slug}`} className="p-0" css={
       css`
       
       `
     }>
      <Card className="ml--2 mr--2 mt-3"  style={{height:"400px", backgroundColor: "#fff", overflow: "hidden"}}>
        <CardImg
          
          alt={title}
          src= { featuredImageUrl || "/assets/img/theme/profile-cover.jpg" }
          top
        />
      
        <CardBody>
          <CardTitle className="mb-0" style={{fontWeight: "bold", color:"#444444"}}>{data.title}</CardTitle>
          { excerpt && <CardText style={{fontWeight: "300", color:"#444444"}}>
            <div dangerouslySetInnerHTML= {{ __html: excerpt.substr(0,90).concat("...")}}/>
          </CardText>}
          <p className=" mb-4" style={{fontSize:"14px"}}>
              {moment(date).format('YYYY/MM/DD')} 
            </p>
        </CardBody>
      </Card>
    </Link>
  )
}
