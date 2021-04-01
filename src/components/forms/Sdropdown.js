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

function Sdropdown({ register, name, onSelectParain,selectedOption,options}) {
 
  // const [selectedOption, setSelectedOption] = useState(options[Math.floor(Math.random() * options.length )]);
   const [open, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(prevState => !prevState);
   const onOptionClicked = value => () => {
    onSelectParain(value)
    toggle();
    setIsOpen(!open)
  };
  return (
    <div>
      <UncontrolledDropdown isOpen={open} toggle={toggle} >
        <DropdownToggle   innerRef={register()}  caret color="" id="navbarDropdownMenuLink2" className="d-flex justify-content-between align-items-center mr-0" style={{width:'250px', padding:'5px', backgroundColor:'#f5f5f5'}}>
          {selectedOption && (
            <div  className="d-flex align-items-center">
                <img className="avatar avatar-sm mr-2" alt={selectedOption.text} src={selectedOption.image.src}></img>   
                <div className="d-flex" style={{flexDirection:'column'}}>
                  <small className="mb-0">
                    {selectedOption.value}
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
            {options.map( (option, i) => (
                <li key={i}>
                  <DropdownItem  tag="button" onClick={onOptionClicked(option)}>
                    <Row className=" align-items-center">
                      <Col className=" col-auto">
                        <a className=" avatar rounded-circle" >
                          <img
                            alt={option.text}
                            src={option.image.src}
                          ></img>
                        </a>
                      </Col>
                      <div className=" col ml--2">
                        <h4 className=" mb-0">
                          <a >{option.value}</a>
                        </h4>
                        <span className=" text-success">.</span>
                        <small>Online</small>
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