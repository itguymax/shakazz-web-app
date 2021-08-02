import React from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import AdminFooter from "../components/Footers/AdminFooter.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import routes from "../routes.js";

function Portal(props) {
  // used for checking current route
  const router = useRouter();
  let mainContentRef = React.createRef();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, []);
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].displayName;
      }
      if(routes[i].children){

         for (let j = 0; j < routes[i].children.length; j++){
           if (router.route.indexOf(routes[i].children[j].layout + routes[i].children[j].path) !== -1) {
        return routes[i].children[j].displayName;
      }
         }
      }
    }
    return "SHAKAZZ";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/portal",
          imgSrc: "/assets/img/brand/logoshakazz.png",
          imgAlt: "Logo Shakazz",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        {/*<AdminNavbar {...props} brandText={getBrandText()} />*/}
        {props.children}
        {/* <Container fluid>
          <AdminFooter />
        </Container> */}
      </div>
    </>
  );
}

export default Portal;
