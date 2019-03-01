
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(()=> {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'xxy1994212@gmail.com',
          first_name: 'Tony',
          last_name: 'Xu',
          isAdmin: true,
          password: '123'
        },
      ]);
    }).then(()=>{
      return knex('events').del()
        .then(()=>{
          return knex('events').insert([
            {
              id: 1,
              title: 'activity1',
              user_id: 1,
              description: 'this is the first activity',
              start_date: '2019-03-01',
              end_date: '2019-03-02',
            },
            {
              id: 2,
              title: 'activity2',
              user_id: 1,
              description: 'this is the second activity',
              start_date: '2019-03-02',
              end_date: '2019-03-03',
            }
          ])
        })
    }).then(()=>{
      return knex('messages').del()
        .then(() => {
          return knex('messages').insert([
            {
              id: 1,
              event_id: 1,
              user_id: 1,
              contents: 'Hello there'
            },
            {
              id: 2,
              event_id: 2,
              user_id: 1,
              contents: 'Hi'
            }
          ])
        })
    })
};
