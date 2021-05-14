import React, { useState } from 'react';

// reactstrap components
import {
    Table,Button, Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import Image from 'next/image'
export default function TabContent(props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return (
        <>
            <Table responsive className="" css={css`
        border-spacing: 10px 10px!important;
        td:first-child { border-top-left-radius: 10px; }
        td:last-child { border-top-right-radius: 10px; }
        td:first-child { border-bottom-left-radius: 10px; }
        td:last-child { border-bottom-right-radius: 10px; }

        tr:first-child { border-top-left-radius: 10px; }
        tr:last-child { border-top-right-radius: 10px; }
        tr:first-child { border-bottom-left-radius: 10px; }
        tr:last-child { border-bottom-right-radius: 10px; }

        th:nth-child(1){
            /* Safari 3-4, iOS 1-3.2, Android 1.6- */
            -webkit-border-radius: 10px 0px 0px 10px;
            /* Firefox 1-3.6 */
            -moz-border-radius: 10px 0px 0px 10px;
            /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
            border-radius: 10px 0px 0px 10px;
        }
        th:nth-last-child(1){
            /* Safari 3-4, iOS 1-3.2, Android 1.6- */
            -webkit-border-radius: 0px 10px 10px 0px;
            /* Firefox 1-3.6 */
            -moz-border-radius: 0px 10px 10px 0px;
            /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
            border-radius: 0px 10px 10px 0px;
        }
        tbody:before {
            line-height:1em;
            content:".";
            color:transparent;
            display:block;
        }`}>
                <thead className="">
                    <tr style={{ backgroundColor: '#CC9933', lineHeight: '0px',  }} css={css`
        div{
            color : #fff;
            font-family: 'Ubuntu';
            font-weight:' bold';
            font-size : 15px;
            text-align: center;
            padding : 5px;
        }
        `}>

                        <th><div>ID</div></th>
                        <th><div>Date</div></th>
                        <th><div>Type</div></th>
                        <th><div >Statut</div></th>
                        <th><div >Montant</div></th>
                        <th><div >Détails</div></th>
                    </tr>
                </thead>
                <tbody className="" css={css`
            td{
                padding: 0px;
                margin : 3px;
                // vertical-align: middle;
                // padding:0px
            }
            tr{
                background-color : rgba(112,112,112,0.1);
            }
            div{
                color : #444444;
                font-size : 14px;
                font-family: Ubuntu;
                text-align: center;
                vertical-align: center;
                padding : 7px ;
                opacity: 1!important;
            }
            `}>
                {props.data.map( (item, key)=> {
                    return <>
                    <tr style={{ }}>
                        <td ><div >{item.id}</div></td>
                        <td><div >{item.date}</div></td>
                        <td><div >{item.type}</div></td>
                        <td><div >{item.statut}</div></td>
                        <td><div >{item.montant}</div></td>
                        <td><div style={{padding:"0px",paddingTop:"5px",cursor:"pointer"}}><Image
                           onClick={toggle}
                          src="/assets/img/icons/add.svg"
                          alt="..."
                          height={2} width={2}
                          /></div></td>
                    </tr>
                    <div></div>
              </>
                })}
                </tbody>
            </Table>
            <Modal isOpen={modal} toggle={toggle} className={className}>
             <ModalHeader toggle={toggle}>Détails sur la transaction</ModalHeader>
             <ModalBody>
                Des détails que des détails et encore plus de détails.
             </ModalBody>
             <ModalFooter>
               <Button style={{backgroundColor:"#cc9932",border:"none"}} onClick={toggle}>Cancel</Button>
             </ModalFooter>
           </Modal>
        </>
    );
}
