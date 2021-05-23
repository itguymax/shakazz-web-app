import React, {useState, useEffect} from 'react';
import { Row , Col, Container, Form, Button} from 'reactstrap';
import {Global,css} from "@emotion/react";
import Portal from "../../src/layouts/Portal.js";
import Sinput from "../../src/components/forms/Sinput";
import LegacyBlock from '../../src/components/common/legacyBlock';
import LinearProgress from "../../src/components/common/linearProgress";
import withAuth from '../../src/hoc/withAuth';
import { device } from '../../src/lib/device';
import { useFetchAllLegacy, useAddLegacy, useDeleteLegacy,useUpdateLegacy,} from '../../src/hooks';
import {useAppContext} from "../../src/context";
import LegacyImage from "../../src/components/LegacyImage";
import LegacyForm from "../../src/components/LegacyForm";
import LegacyBox from "../../src/components/LegacyBox";
import Line from '../../src/components/common/line';
import FileUPloader from '../../src/components/FileUpload';



function Legacy() {
  
  const context =  useAppContext();
  const { data: legacyData, isLoading: loadLegacydata } = useFetchAllLegacy(context.appState.accessToken);
  const { mutateAsync:addMutatioData, isLoading:loadMutatioData } = useAddLegacy();
  const { mutateAsync: delMutation, isLoading: loadDelMutation } = useDeleteLegacy();
  const [legacies, setLegacies] = useState([]);
  const [selectedOfficialFile, setSelectedOfficialFile] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [percentage, setPercentage] = useState(0);
   const onSubmit = async (body) =>{
     


try{
  const res = await addMutatioData({accessToken: context.appState.accessToken, data: body});
  console.log("Legacy req", res);
} catch(err){
  console.log(err);
}


console.log("legacy data", body);
    //  if(legacies.length >= 1){
    //     let sumper = legacies.reduce( function(a, b){
    //     return a + b['pourcentageHeritage'];
    // }, 0);
    //     if(sumper === 100){
    //       alert("la somme doit etre egal a cent ")
    //     }

    //     return;
    //  }
    //  let ldata = [...legacies,data]
    //   setLegacies(ldata);

  };

const handleEdition = (item) => {
 console.log("edit legacy", item);
}
const handleDelete = async (name) => {
  console.log("delete legacy", name);
   alert(`Supprimer ${name}`)
  const body = {
    data : {
        legacy : {
            id: name
        }
       
    }
};

try {
  const res = await delMutation({ accessToken: context.appState.accessToken, data: body});
console.log("del ayant droit ", res);
  if(res.success && !res.error){
    console.log("deleted successfully")
  } else {
    console.log("deleted error");
  }

} catch(err){
  console.log(err);
}
  
  
  // const newList = legacies.filter((item) => item.name !== name);
  // setLegacies(newList);

}

useEffect((data)=>{
  if(legacies.length <= 1){
    setPercentage(100);
  }

},[legacies])
console.log("ayants droit", legacyData);
const onFileSelect = (file) => {
  setSelectedOfficialFile(file);
  console.log("file", file);
}
const submitOfficialDoc =  (file) => {
  console.log("file to submit", selectedOfficialFile);
  const formData = new FormData();
  formData.append('doc', 'facultafif');
  formData.append('file', selectedOfficialFile);
  formData.append('bucket', 'legacys-shakazz');
  formData.append('id', '60a5fd07b5f28807b43082ed');
     console.log("form data", formData);
     const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        auth_token: context.appState.accessToken,
        
      },
      body: formData
    }
  
    fetch('http://localhost:5000/api/v1/services/uploads/legacy/document', params)
    .then((res) => {
      console.log("res fillll", res)
      alert("File Upload success");
    })
    .catch((err) => alert("File Upload Error"));
};
const submitLegacyPhoto =  (file) => {
  console.log("file to submit", selectedOfficialFile);
  const formData = new FormData();
  formData.append('doc', 'profil');
  formData.append('file', selectedOfficialFile);
  formData.append('bucket', 'legacys-shakazz');
  formData.append('id', '60a5fd07b5f28807b43082ed');
     console.log("form data", formData);
     const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        auth_token: context.appState.accessToken,
        
      },
      body: formData
    }
  
    fetch('http://localhost:5000/api/v1/services/uploads/legacy/profil', params)
    .then((res) => {
      console.log("res fillll", res)
      alert("File Upload success");
    })
    .catch((err) => alert("File Upload Error"));
};

  return (
    <>
    <Global
    styles={css`
      img{
        cursor:pointer;
        transition: all .8s ease-in-out;
      }
      img[id="profile_photo"]:hover{
        transform: scale(1.5);
      }
      img[alt="profile_photo_legacy"]:hover{
        transform: rotate(360deg);
      }
      .legacy_block_container{
        margin-top:1em;
        border-top:3px solid #e5e5e5;
        padding-top:1em;
        padding-left:3em;
        padding-right:3em;
      }
      @media ${device.mPhone} {
        }
      @media ${device.bPhone} {
      }
      @media ${device.sTablet} {
      }
      @media ${device.bTablet} {
        .legacy_block_container{
          padding-left:1em;
          padding-right:1em;
        }
      }
    `}
    />
  <Portal>
    <Container className="mb-4" fluid>
      <div className="d-flex justify-content-center text-center" style={{flexDirection:'column'}}>
        <p style={{ font: "normal normal normal 20px/25px Ubuntu", color: "#444", opacity: 1}}>
        Cet espace est dédié à vos bénéficiaires <br/> en cas d'inactivité, de décès ou autres.
        </p>
        <div>
          <a style={{ font: "normal normal bold 14px/15px Ubuntu", color: "#333"}}> En savoir plus</a>
        </div>
      </div>
      <div>
      <Row> <h1 style={{font: 'normal normal italic 30px/35px Ubuntu', color: "#444"}}> Ajouter</h1></Row>
      <Row className="mt-4 justify-content-between">
        <LegacyForm onSubmit={onSubmit} setPercentage={setPercentage} handleOnFileSelect={onFileSelect}/>
        <Col xl="5">
          <Row>
           <Col xl="5">
              <LinearProgress label="Pourcentage héritage" val={percentage} pColor="#CC9933"/>
           </Col>
           <Col xl="7" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
               <LegacyImage/>
           </Col>
         </Row>
        </Col>
      </Row>
       {/* <Line bgc='#b7b7b7' height="1px"/> */}
        
        
      </div>
      <Container className="legacy_block_container">
      
        {
          legacyData?.data.legacys.length >= 1 ? <>
          {
              legacyData?.data.legacys.map((item ,key)=>  <LegacyBlock key={key} del={()=> handleDelete(item._id)} edit={ ()=> handleEdition(item) } item={item} />)
          }
        </>: <div> Aucun ayant droit</div>
        
        }
        

      
        
      </Container>
    </Container>
  </Portal>
  </>
  )
}



export default  withAuth(Legacy);
