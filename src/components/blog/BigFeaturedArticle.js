import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Image from 'next/image';
export default function BigFeaturedArticles({ bigFeaturedPost}) {
  const {title, slug, date, featuredImage} = bigFeaturedPost;
  let featuredImageUrl="";
  if(featuredImage){
   featuredImageUrl =  featuredImage.node.sourceUrl
  }
  
  return (
    
     <div >
     <Image
        alt={title}
        src={ featuredImageUrl|| "/assets/img/theme/profile-cover.jpg"}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div style={{position:"absolute", bottom:0, width:"100%"}}>
         <Link href={`/blog/${slug}`} >
          <h1 className="display-2 text-white">{title}</h1>
       </Link>
        <p className="text-white mt-0 mb-5">
           {moment(date).format('YYYY/MM/DD')}
        </p>
      </div>
  </div>
  )
}
