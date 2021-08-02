import React from "react";
// reactstrap components
import {
    CardBody,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
} from "reactstrap";
// Core Components
import TabExplain from "./tabContent";
import NavHeader from "./navHeader";

export default function navPil({currentHTabsIcons, handleSetHTabs, data}) {
    const items = [
        {
          altText: 'Toutes',
        },
        {
          altText: 'Wallet principal',
        },
        {
          altText: 'Wallet vault',
        },
        {
          altText: 'Wallet networking',
        },
        {
          altText: 'Wallet transfert',
        }
      ];


    return (
        <>

        <Container>
            <div style={{ padding: '0px' }} className="nav-wrapper" css={css`
        .nav-link{
              color:#fff;
              font-size:bold;
              cursor:pointer;
              height : 35px;
              text-align : left;
              padding : 8px;
              box-shadow: none;
              background: #707070;
              &:hover {
                color:#fff;
              }
        }

    `}>
            <Nav style={{ margin: '0px', padding: '0px' }} className="nav-fill flex-column flex-xl-row flex-lg-row flex-md-row" pills css={css`
            .nav-link.active{
                    background-color: #679966;
                    &:hover {
                    color:#fff;
                    }
            }

            `}>
                <NavHeader handleSetHTabs={handleSetHTabs} hTabsIcons={currentHTabsIcons} indicator="hTabsIcons-1"  text={items[0].altText}/>
                <NavHeader handleSetHTabs={handleSetHTabs} hTabsIcons={currentHTabsIcons} indicator="hTabsIcons-2" text={items[1].altText}/>
                <NavHeader handleSetHTabs={handleSetHTabs} hTabsIcons={currentHTabsIcons} indicator="hTabsIcons-3" text={items[2].altText}/>
                <NavHeader handleSetHTabs={handleSetHTabs} hTabsIcons={currentHTabsIcons} indicator="hTabsIcons-4" text={items[3].altText}/>
                 <NavHeader handleSetHTabs={handleSetHTabs} hTabsIcons={currentHTabsIcons} indicator="hTabsIcons-5" text={items[4].altText}/>
            </Nav>
            </div>
            <Row style={{ borderBottom: '2px solid #888 ', marginBottom: '15px', marginTop: '0px', marginLeft : '4px', marginRight :'4px' }}>
            </Row>
                <CardBody  css={css`
                    padding : 0px;
                    `}>
                    <TabContent id="myTabContent" activeTab={currentHTabsIcons} >
                        <TabPane  tabId="hTabsIcons-1" role="tabpanel" >
                            <TabExplain data = {data} />
                        </TabPane>
                        <TabPane tabId="hTabsIcons-2" role="tabpanel">
                            <TabExplain data = {data} />
                        </TabPane>
                        <TabPane tabId="hTabsIcons-3" role="tabpanel">
                            <TabExplain data = {data} />
                        </TabPane>
                        <TabPane tabId="hTabsIcons-4" role="tabpanel">
                            <TabExplain data = {data} />
                        </TabPane>
                        <TabPane tabId="hTabsIcons-5" role="tabpanel">
                            <TabExplain data = {data} />
                        </TabPane>
                    </TabContent>
                </CardBody>
                </Container>
        </>
    );
}
