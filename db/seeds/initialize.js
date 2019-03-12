
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
          password: '123',
          url: 'http://localhost:5000/test.jpg'
        },
        {
          id: 998,
          email: 'tony@tony.com',
          first_name: 'Tony',
          last_name: 'Xu',
          isAdmin: false,
          password: '123',
          url: 'http://localhost:5000/test.jpg'
        },
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
              lat: '49.2812035',
              lng: '-123.1170317',
              weather: 'rain',
              start_date: 'Jan 13, 2019 04:20',
              end_date: 'Jan 13, 2019 05:20',
              url:'http://localhost:5000/test.jpg'
            },
            {
              id: 999,
              title: 'activity2',
              description: 'this is the second activity',
              location: 'Victoria',
              lat: '48.4238195',
              lng: '-123.3662719',
              weather: 'sunny',
              start_date: 'Jan 14, 2019 04:20',
              end_date: 'Jan 14, 2019 05:20',
              url: 'http://localhost:5000/test.jpg'
            }
          ])
        })
    }).then(()=>{
      return knex('messages').del()
        .then(() => {
          return knex('messages').insert([
            {
              id: 998,
              event_id: 998,
              user_id: 999,
              join_message: true,
              contents: 'activity 1',
              url: 'http://localhost:5000/test.jpg'
            },
            {
              id: 999,
              event_id: 999,
              user_id: 999,
              join_message: true,
              contents: 'activity 2 abcd',
              url: 'http://localhost:5000/test.jpg'
            },
          ])
        })
    })
};
