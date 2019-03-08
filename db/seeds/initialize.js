
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(()=> {
      // Inserts seed entries
      return knex('users').insert([
        { id:999,
          email: 'admin@admin.com',
          first_name: 'Admin',
          last_name: 'admin',
          isAdmin: true,
          password: '123'
        },
        {
          id: 1,
          email: 'ty@123.com',
          first_name: 't',
          last_name: 'y',
          isAdmin: false,
          password: '123'
        }
      ]);
    }).then(()=>{
      return knex('events').del()
        .then(()=>{
          return knex('events').insert([
            {
              id: 998,
              title: 'activity1',
              description: 'this is the first activity',
              location: 'Vancouver',
              weather: 'rain',
              start_date: new Date('Jan 13, 2019 04:20'),
              end_date: new Date('Jan 13, 2019 05:20'),
            },
            {
              id: 999,
              title: 'activity2',
              description: 'this is the second activity',
              location: 'Victoria',
              weather: 'sunny',
              start_date: new Date('Jan 14, 2019 04:20'),
              end_date: new Date('Jan 14, 2019 05:20'),
            }
          ])
        })
    }).then(()=>{
      return knex('messages').del()
        .then(() => {
          return knex('messages').insert([
            {
              id: 994,
              event_id: 998,
              user_id: 1,
              contents: 'this is not from an admin'
            },
            {
              id: 995,
              event_id: 998,
              user_id: 999,
              contents: 'Hello there - from an ADMIN'
            },
            {
              id: 996,
              event_id: 998,
              user_id: 999,
              contents: 'asdsadasd from an ADMIN!'
            },
            {
            id: 997,
            event_id: 998,
            user_id: 1,
            contents: '123 this is also not from an admin'
            },
            {
              id: 998,
              event_id: 999,
              user_id: 1,
              contents: 'Not from admin!'
            },
            {
              id: 999,
              event_id: 999,
              user_id: 999,
              contents: 'abc from an ADMIN!'
            },
          ])
        })
    })
};
