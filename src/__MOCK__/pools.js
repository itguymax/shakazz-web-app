// import { v4 as uuid } from 'uuid';

const pools =  [
    {
     id: 1,
     name: "Pool mensuelle",
     percentage: "7.5%",
     taux360:7.5,
     taux720: 8.5,
     taux1080: null,
     taux1800: null,
     frequence: 30
  },
   {
     id: 2,
     name: "Pool semi-annuelle",
     percentage: "51%",
     taux360:51,
     taux720: 57,
     taux1080: 63,
     taux1800: null,
     frequence: 180
  },
   {
     id: 3,
     name: "Pool annuelle",
     percentage: "114%",
     taux360: 114,
     taux720: null,
     taux1080: 132,
     taux1800: 144,
     frequence: 360
  }
]


export default pools;