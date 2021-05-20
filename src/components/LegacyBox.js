import React from 'react';
import { Row , Container,  Button} from 'reactstrap';
import Image from 'next/image';

export default function LegacyBox({item, del, edit}) {
  return (
    <>
       
         <Container style={{ width:"70%"}} className="mb-3">
         <Row style={{backgroundColor:"#F0F0F0",height: '50px', borderRadius:"40px",overflow:'hidden'}} >
        <div style={{display:'flex', flexDirection:'row', justifyContent:"space-between", width:"100%", paddingTop:"10px" }}>
           <Image
            src="https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/search%3Fq%3Dadd%2Bcountry%2Bflag%2Bin%2Bnext%2Bjs%26oq%3Dadd%2Bcontry%2Bflag%2Bin%2Bnext%26aqs%3Dchrome.1.69i57j33i10i160l3.12407j0j4%26sourceid%3Dchrome%26ie%3DUTF-8"
            alt="..."
            className="rounded-circle"
            height={45} width={45}
            style={{backgroundColor:"#000"}}
            />
            <p>{item.name}</p>
            <p>{item.telephone}</p>
            <p>{` ${item.address} + " " ${item.country.name} `}</p>
            <div className="rounded-circle" style={{backgroundColor: "#CC9933", marginTop:"-8px",marginRight:"2px", height: "45px",display:"flex", justifyContent:'center', alignItems:'center', width:"45px", fontSize:"12px", color:'#fff'}}>
              <span>{`${item.percentage}`+"%"}</span>
            </div>
        </div>

         </Row>
         <div className="text-right">
           <Button className="mt-3 mb-1"  onClick={ edit }  type="submit" style={{ backgroundColor:'#679966', borderColor:'#679966', borderRadius:'40px', }} >
              Modifier
            </Button>
            <Button className="mt-3 mb-1" onClick={del}   type="submit" style={{ backgroundColor:'#D20000', borderColor:'#D20000', borderRadius:'40px', }} >
              Supprimer
            </Button>
         </div>
         </Container>

    </>
  )
}
