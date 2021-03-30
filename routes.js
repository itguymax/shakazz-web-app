
var routes = [
  {
    path: "/dashboard",
    name: "Home",
    displayName: "Dashboard",
    icon:  "far fa-address-card",
    layout: "/portal",
  },
  {
    path: "/crowdlending",
    name: "Crowdlending",
    displayName: "Crowdlending",
    icon: "ni ni-world-2 text-blue",
    layout: "/portal",
  },
  {
    path: "/networking",
    name: "Networking",
    displayName: "Networking",
    icon: "ni ni-pin-3 text-orange",
    layout: "/portal",
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
