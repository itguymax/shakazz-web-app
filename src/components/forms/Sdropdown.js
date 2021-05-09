import React, {useState, useEffect} from "react";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";
import { useNetworkers } from "../../hooks"

function Sdropdown({ register, name, onSelectParain,selectedOption,options}) {

  const {data, isLoading} = useNetworkers();
 
  // const [selectedOption, setSelectedOption] = useState(options[Math.floor(Math.random() * options.length )]);
   const [open, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(prevState => !prevState);
   const onOptionClicked = value => () => {
     console.log("oppppp",value);
    onSelectParain(value)
    // toggle();
    // setIsOpen(!open)
  };
  if(isLoading){
    return <div>Loading networkers...</div>
  }
  const networkersOptions = data.data.networkers.data.map((item)=> {

  })
  console.log("data networkers", data.data.networkers.data);
  return (
    <div>
      <UncontrolledDropdown isOpen={open} toggle={toggle} >
        <DropdownToggle   innerRef={register()}  caret color="" id="navbarDropdownMenuLink2" className="d-flex justify-content-between align-items-center mr-0" style={{width:'250px', padding:'5px', backgroundColor:'#f5f5f5'}}>
          {selectedOption && (
            <div  className="d-flex align-items-center">
                <img className="avatar avatar-sm mr-2" alt="user profile image" src="/assets/img/theme/react.jpg"></img>   
                <div className="d-flex" style={{flexDirection:'column'}}>
                  <small className="mb-0">
                    {selectedOption.userName}
                  </small>
                  <div className="d-flex align-items-center">
                    <small>Flag</small>
                    <small>Online</small>
                  </div>
                </div>
            </div>
          )}
        </DropdownToggle>
        <DropdownMenu  name={name}  aria-labelledby="navbarDropdownMenuLink2">
            {data.data.networkers.data.map( (option, i) => (
                <li key={i}>
                  <DropdownItem  tag="button" onClick={onOptionClicked(option)}>
                    <Row className=" align-items-center">
                      <Col className=" col-auto">
                        <a className=" avatar rounded-circle" >
                          <img
                            alt="user profile image"
                            src="/assets/img/theme/react.jpg"
                          ></img>
                        </a>
                      </Col>
                      <div className=" col ml--2">
                        <h4 className=" mb-0">
                          <a >{option.userName}</a>
                        </h4>
                        {/* <span className=" text-success">.</span>
                        <small>Online</small> */}
                      </div>
                    </Row>
                  </DropdownItem>
                </li>

              ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}

export default Sdropdown;