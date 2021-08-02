import React from "react";
import {Global,css} from "@emotion/react";
import Image from "next/image";
import {device} from "../lib/device";
import { TabPane, Nav, Row, NavItem, NavLink, Container} from 'reactstrap';
const TabH = ({indicator, text,hTabsIcons,handleSetHTabs, image, textStyle}) => {
  return (
    <>
    <Global
    styles={css`
      @media ${device.sPhone} {
        a.active.nav-link div{
          background-color:#dcb504 !important;
          border-radius:8px;
        }
        }
      @media ${device.mPhone} {
        a.active.nav-link div{
          background-color:#dcb504 !important;
          border-radius:8px;
        }
        }
      @media ${device.iphoneX} {
        a.active.nav-link div{
          background-color:#dcb504 !important;
          border-radius:8px;
        }
        }
      @media ${device.bPhone} {
        a.active.nav-link div{
          background-color:#dcb504 !important;
          border-radius:8px;
        }
        }
      @media ${device.sTablet} {
        a.active.nav-link div{
          background-color:#dcb504 !important;
          border-radius:8px;
        }
        }
    `}
    />
     <NavItem css={css`

     `}>
            <NavLink
              className={
               (!image ? "": "mb-sm-3 mb-md-3") +
                ( hTabsIcons === indicator ? "active" : "")
              }
              href="#itguymax"
              onClick={(e) => {
                e.preventDefault();
                handleSetHTabs(indicator);
              }}
            >
             <Container fluid css={css`

                 display: flex;
                 flex-direction: row;
                 justify-content: center;
                 align-items: center;
                 img{
                   flex:1;
                   margin-right: 5px;
                 }
                 h3{

                   padding-left: 5px;

                 }
                 @media (max-width: 600px){
                  display: flex;
                  justify-content:center;
                  align-items: center;

                 }
                 @media ${device.laptop}{
                      h3{


                   padding-left: 0px;

                 }
                 }
             `}>

                 {image &&  <Image priority={true}  quality={100} width="35px" height="35px" src={hTabsIcons === indicator ? "/assets/img/icons/icon_activated.svg" : "/assets/img/icons/icon_non-activated.svg"} />}
                <h3 style={textStyle}> {text} { hTabsIcons === indicator && <span/>}</h3>

             </Container>

            </NavLink>
          </NavItem>
          </>
  )
}

export default TabH ;
