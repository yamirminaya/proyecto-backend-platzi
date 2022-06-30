// const { faker } = require('@faker-js/faker');
// let users = [];

// function createRandomUser() {
//   return {
//     id: faker.datatype.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// Array.from({ length: 10 }).forEach(() => {
//   users.push(createRandomUser());
// });

const db = {
  user: [
    {
      id: 'd0a70d54-93ba-4ae7-a81a-db0d8998cdc9',
      username: 'Lavern41',
      email: 'Fidel.Little@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/655.jpg',
      password: 'gDJDUX4jHcPnVZ5',
      birthdate: '2001-04-30T10:30:45.975Z',
      registeredAt: '2022-06-03T10:18:14.919Z',
    },
    {
      id: '48538d64-5141-4c7e-a2eb-e5f0a84ef128',
      username: 'Norbert_Bergnaum59',
      email: 'Evans11@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/929.jpg',
      password: '9T5aVN3HPkZQo_d',
      birthdate: '1982-07-13T15:53:59.355Z',
      registeredAt: '2022-06-23T13:21:12.327Z',
    },
    {
      id: 'b6fc05ce-7e96-4e1a-a4c3-23e5a9b2eb26',
      username: 'Felicity57',
      email: 'Norbert89@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/235.jpg',
      password: 'ZR4rvYLTWiol0vZ',
      birthdate: '1943-04-11T20:58:06.107Z',
      registeredAt: '2022-01-20T02:47:27.805Z',
    },
    {
      id: 'fa184d25-a205-423f-8609-028b2b72eb33',
      username: 'Narciso.Gleason',
      email: 'Stone_Gerlach15@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/324.jpg',
      password: 'plMkNgjmmNrRRJv',
      birthdate: '1963-08-18T00:11:57.668Z',
      registeredAt: '2021-11-21T10:52:08.503Z',
    },
    {
      id: '704fda71-8960-49ce-b072-0adc14b16575',
      username: 'Lorine.Upton20',
      email: 'Karlee80@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg',
      password: 'coDVIxsK_16dVaV',
      birthdate: '1983-04-24T09:07:22.965Z',
      registeredAt: '2021-10-25T08:44:09.422Z',
    },
    {
      id: 'c018d588-7a5f-4e04-a4e8-d54f2b2970d4',
      username: 'Rolando_Kuphal',
      email: 'Efren92@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/76.jpg',
      password: 'XQHAoQSG1TNM_Ow',
      birthdate: '2000-03-18T11:26:50.269Z',
      registeredAt: '2022-03-13T05:02:09.356Z',
    },
    {
      id: 'e47dfc23-41e2-45ce-97e3-ff5075730368',
      username: 'Corene0',
      email: 'Elwyn_Klein75@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/606.jpg',
      password: 'Ta8Le1f7kMjaO6D',
      birthdate: '1963-04-30T13:35:48.429Z',
      registeredAt: '2022-05-18T09:00:26.874Z',
    },
    {
      id: '39980314-fd2e-4c50-b6ba-5654ff6155a1',
      username: 'Harold0',
      email: 'Spencer_Schaden@yahoo.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/44.jpg',
      password: 'IRBPZ_kOtxuQHco',
      birthdate: '1967-01-19T12:06:19.810Z',
      registeredAt: '2021-11-02T04:47:50.044Z',
    },
    {
      id: 'f362e2b2-b76d-4180-a5aa-77a0a3fd79b6',
      username: 'Miguel27',
      email: 'Kole21@hotmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/714.jpg',
      password: 'I2vWy4j3kXk4W8j',
      birthdate: '1967-05-13T09:27:51.281Z',
      registeredAt: '2021-07-05T04:05:22.674Z',
    },
    {
      id: '3449d33a-7505-489b-b05c-11126674b3af',
      username: 'Jensen65',
      email: 'Lia_Mueller@gmail.com',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/619.jpg',
      password: 'nMTeoCIM7ePlmdb',
      birthdate: '1978-04-11T13:58:15.034Z',
      registeredAt: '2021-09-12T05:19:08.173Z',
    },
  ],
};

async function list(tabla) {
  return db[tabla] || [];
}

async function get(tabla, id) {
  let col = await list(tabla);
  return col.filter((item) => item.id === id)[0];
}

async function upsert(tabla, data) {
  if (!db[tabla]) {
    db[tabla] = [];
  }
  db[tabla].push(data);
  console.log(db);
}

async function query(tabla, q) {
  let col = await list(tabla);
  let keys = Object.keys(q);
  let key = keys[0];
  return col.filter((item) => item[key] === q[key])[0] || null;
}

async function remove(tabla, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
