// import { v4 as uuid } from 'uuid';

const user = 
  {
    id: 1,
    address: {
      country: {
        name: "Cameroun",
        flag:"/assets/img/country-flags/cameroun.png",
        indicatif:"+237"
      },
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    grade:"starter 1",
    avatarUrl: '/assets/img/users/user3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097',
    weeklyTurnOver: 3000000,
    wallet: [
      {
        name: "Wallet principal",
        amount: 500
      },
      {
        name: "Wallet vault",
        amount: 500
      },
      {
        name: "Wallet networking",
        amount: 500
      }

    ],
  children : {
    child1 : [12,13,14,15,],
    child2 : [21,22,24,23],
    child3 : [31,32],
    child4 : [],
    child5 : []
  },
  };

 export const currentUser = {
     address: {
      country: {
        name: "Cameroun",
        flag:"/assets/img/country-flags/cameroun.png",
        indicatif:"+237"
      },
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    grade:"starter 1",
    avatarUrl: '/assets/img/users/user3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Yvan Fotso',
    phone: '691251462',
    weeklyTurnOver: 3000000,
  }
export default user