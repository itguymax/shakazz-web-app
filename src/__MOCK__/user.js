// import { v4 as uuid } from 'uuid';

const user = 
  {
    id: 1,
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097',
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

    ]
  };

export default user