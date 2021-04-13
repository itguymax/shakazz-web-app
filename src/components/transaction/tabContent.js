import React from "react";

// reactstrap components
import {
  Badge,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
} from "reactstrap";

export default  function TabContent(props) {
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
        }

        
          
    `}>
        
        <thead className="" css={css`
        `}>
          <tr  style = {{ backgroundColor:'#CC9933', lineHeight :'0px'}} css={css`
        div{
            color : #fff;
            font-family: 'Ubuntu';
            font-weight:' bold';
            font-size 15px;
            text-align: center;
            padding : 5px;
        }
        `}>

            <th  className=" sort" rowspan="2" data-sort="ID" scope="col">
                <div >
                    ID
                </div>
            </th>
            <th  data-sort="Date" scope="">
                <div >
                    Date
                </div>
                
            </th>
            <th  data-sort="Type" scope="">
                <div >
                    Type
                </div>
                
            </th>
            <th data-sort="Statut" scope="">
                <div >
                    Statut
                </div>
                
            </th>
            <th data-sort="Montant" scope="">
                <div >
                    Montant
                </div>
                
            </th>
          </tr>
        </thead>
        <tbody className=""  css={css`
            td{ 
                padding: 0px;
                font-weight: bold;
                vertical-align: middle;
                padding:0px
            }
            tr{
                background-color : #9999;
                border-collapse:separate!important; 
                border-spacing: 10px 10px!important;
            }
            div{
                color : #444444;
                font-size 14px;
                font-family: Ubuntu;
                text-align: center;
                padding : 7px;
            }

        
            `}>
            
          <tr className="">
            <td >
                <div >
                    pending
                </div>
            </td>
            <td>
                <div >
                    pending
                </div>
            </td>
            <td>
                <div >
                    pending
                </div>
            </td>
            <td>
              <div >
                iciciciciicicicici
              </div>
            </td>
            <td>
                <div >
                    pending
                </div>
            </td>
          </tr>
            <div></div>
          <tr className="">
            <td >
                <div>
                    pending
                </div>
            </td>
            <td>
                <div>
                    pending
                </div>
            </td>
            <td>
                <div>
                    pending
                </div>
            </td>
            <td>
              <div >
                iciciciciicicicici
              </div>
            </td>
            <td>
                <div>
                    pending
                </div>
            </td>
          </tr>
          <div></div>
          <tr className="">
            <td >
                <div>
                    pending
                </div>
            </td>
            <td>
                <div>
                    pending
                </div>
            </td>
            <td>
                <div>
                    pending
                </div>
            </td>
            <td>
              <div >
                iciciciciicicicici
              </div>
            </td>
            <td>
                <div>
                    pending
                </div>
            </td>
          </tr>

        </tbody>
      </Table>
    </>
  );
}

