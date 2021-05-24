import React from 'react';
import Image from 'next/image';
import { Button} from 'reactstrap';
export default function LegacyImage() {
  return (
    <>
         <div className="rounded-circle" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:'200px', width:'200px'}}>
                 
                  <Image
                  id="profile_photo"
                  src="/assets/img/IMG_20181121_094329_174@2x.png"
                  alt="..."
                  className="rounded-circle"
                  height={200} width={200}
                  style={{backgroundColor:"#000",margin:"auto"}}
                  />
                
          </div>
                <Button className="mt-3 mb-1"   type="submit" style={{ backgroundColor:'#679966', borderColor:'#679966', borderRadius:'40px', }} >
                  Ajouter une image
                </Button>
    </>
  )
}
