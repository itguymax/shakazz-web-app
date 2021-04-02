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
const cardStyle = { width: "20rem" };
export default function ArticlePreview({data}) {
  return (
     <Link href={`/blog/${data.slug}`} style={{cursor: "pointer"}}>
      <Card >
        <CardImg
          alt="..."
          src="assets/img/theme/img-1-1000x600.jpg"
          top
        ></CardImg>
        <CardBody>
          <CardTitle className="mb-0" style={{fontWeight: "bold", color:"#444444"}}>{data.title}</CardTitle>
          <CardText style={{fontWeight: "300", color:"#444444"}}>
            {data.title}
          </CardText>
          <p className=" mb-4" style={{fontSize:"14px"}}>
              {moment(data.date).format('YYYY/MM/DD')} 
            </p>
        </CardBody>
      </Card>
    </Link>
  )
}
