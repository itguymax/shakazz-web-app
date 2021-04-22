
var routes = [
  {
    path: "/dashboard",
    name: "Home",
    displayName: "Dashboard",
    icon:  "far fa-address-card",
    icon1:"/assets/img/icons/dashboard/home.svg",
    icon2:"/assets/img/icons/dashboard/home1.svg",
    layout: "/portal",
  },
  {
    path: "/crowdlending",
    name: "Crowdlending",
    displayName: "Crowdlending",
    icon: "ni ni-world-2 text-blue",
    layout: "/portal",
    icon1:"/assets/img/icons/dashboard/crowndlending.svg",
    icon2:"/assets/img/icons/dashboard/crowndlending1.svg",
  },
  {
    path: "/networking",
    name: "Networking",
    displayName: "Networking",
    icon: "ni ni-pin-3 text-orange",
    layout: "/portal",
    icon1:"/assets/img/icons/dashboard/networking.svg",
    icon2:"/assets/img/icons/dashboard/networking1.svg",
  },
  // {
  //   path: "/profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   layout: "/admin",
  // },
  {
    path: "/transactions",
    name: "Menu",
    displayName: "Transaction",
    icon: "ni ni-chart-pie-35 text-red",
    icon1:"/assets/img/icons/dashboard/menu.svg",
    icon2:"/assets/img/icons/dashboard/menu1.svg",
    layout: "/portal",
    children: [
        {
      path: "/securite",
      name: "securite",
      displayName: "Sécurité",
      layout: "/portal"
    },
    {
      path: "/legacy",
      name: "Legacy",
      displayName: "Legacy",
      layout: "/portal"
    },
     {
      path: "/transactions",
      name: "securite",
      displayName: "Sécurité",
      layout: "/portal"
    },
  ]
  }
];
export default routes;
