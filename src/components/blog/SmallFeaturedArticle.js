import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Image from 'next/image'
export default function SmallFeaturedArticle({smallFeaturedPost}) {
  const {title, slug, date} = smallFeaturedPost;
  return (
    <div className=" pt-3 pb-3 pl-3 pr-0 d-flex" style={{backgroundColor:"#205447", position:"relative", height: "200px"}}>
       <Image
        alt={title}
        src="/assets/img/theme/profile-cover.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div style={{position:"absolute", bottom:"0px"}} >
            <Link href={`/blog/${slug}`}><h1 className=" text-white">{title}</h1></Link>
            <p className="text-white  mb-4" style={{fontSize:"14px"}}>
              {moment(date).format('YYYY/MM/DD')} 
            </p>
      </div>
    </div>
  )
}
