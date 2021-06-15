import React, {useState} from 'react';
import {
  FormGroup,
  Col,Form
} from "reactstrap";
import Image from 'next/image';
import Toast from "./Toast";
import styled from '@emotion/styled';
import {useAppContext} from "../../context";
import  apiV1  from '../../services/config';
const Button = styled.button`
    background-color: #679966;
    border-radius: 20px;
    margin-top:1.8em;
    color: white;
    padding:0.6em;
    width:10em;
    border:1px solid #679966;
    font-weight:100;
    transition: all .8s ease-in-out;
    &:hover {
      color: #679966;
      background-color:white;
  }
`

export default function ProfileUpload({grade}) {
  const context = useAppContext();
  const [visibleAlert, setAlertVisible] = useState(false);
  const [responseAlert, setResponseAlert] = useState({});
  const onDismiss = () => setAlertVisible(false);
  const [fileUrl, setFile] = useState(null);
  function uploadFiles(files,idResponse){
    let reader = new FileReader();
      reader.addEventListener("load", function(){
        requestAnimationFrame(()=>{
          idResponse.src = this.result;
          setFile(this.result);
        });
      },false);
      reader.readAsDataURL(files);
    }
  const launchUpload = (idResponse) => {
    const response = document.getElementById(idResponse);
    const source_file = document.createElement("input");
    source_file.type = "file";
    source_file.multiple = "false";
    source_file.click();
    source_file.addEventListener("change",()=>{console.log("profile change", source_file.files[0])
  		uploadFiles(source_file.files[0],response);
  	});
    return source_file;
    };
    const submitProfilPic =  async (file,doc) => {
  // console.log("file to submit", selectedOfficialFile);
  const formData = new FormData();
  formData.append('doc', doc);
  formData.append('file', file);
  formData.append('bucket', 'users-shakazz');
     const params = {
      method: 'POST',
      headers: {
        //  Accept: 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'multipart/form-data',
        auth_token: context.appState.accessToken,
      },
      body: formData
    }
    try{
       const res = await fetch(`${apiV1.root}/uploads/user/profil`, params);
       console.log(res)
       //setResponseAlert({error:false,message:res});
       //setAlertVisible(true);
    } catch(err){console.log(res)
      //setResponseAlert({error:true,message:res});
      //setAlertVisible(true);
    }

};
const upload = async () => {
      await submitProfilPic(fileUrl, "profil");
      console.log("upload profil", fileUrl);
    }
  return (
    <>
    <div  className="col-md-12" encType="multipart/form-data" style={{textAlign:"center"}} >
              <Image
                  id="profile_photo"
                  src= {fileUrl|| "/assets/img/def-user-profile.png"}
                  alt="..."
                  className="rounded-circle"
                  height={200} width={200}
                  style={{backgroundColor:"#000",margin:"auto"}}
                  onClick={() =>{
                    launchUpload("profile_photo");
                  }}
              />
                      <FormGroup>
                        <Button onClick={upload}>Envoyer</Button>
                      </FormGroup>
              <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <Image
                src="/assets/img/free-badge-icon-1361-thumb@2x.png"
                alt={grade}
                height={150} width={150}
                style={{backgroundColor:"#000",margin:"auto",marginTop:"1em"}}
                />
                <small>{grade}</small>
              </div>

  </div>
  <Toast visibleAlert={visibleAlert} onDismiss={onDismiss} responseAlert={responseAlert}/>
  </>
  )
}
