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
        {
          id: 900,
          email: 'bob@bob.com',
          first_name: 'Bob',
          last_name: 'McBobberson',
          isAdmin: false,
          password: '123',
          url: 'https://picsum.photos/200/300/?random'
        },
        {
          id: 901,
          email: 'christine@christine.com',
          first_name: 'Christine',
          last_name: 'Jackson',
          isAdmin: false,
          password: '123',
          url: 'https://picsum.photos/200/300/?random'
        },
        {
          id: 902,
          email: 'lily@lily',
          first_name: 'Lily',
          last_name: 'Hopkins',
          isAdmin: false,
          password: '123',
          url: 'https://picsum.photos/200/300/?random'
        },
        {
          id: 903,
          email: 'ryan@ryan.com',
          first_name: 'Ryan',
          last_name: 'Dennis',
          isAdmin: false,
          password: '123',
          url: 'https://picsum.photos/200/300/?random'
        }
      ]);
    }).then(()=>{
      return knex('events').del()
        .then(()=>{
          return knex('events').insert([

            {
              id: 999,
              title: 'Lighthouse Park',
              description: `This rugged, forested park, which is located along West Vancouver's Marine Drive and 20 to 25 minutes from downtown, features several trails that lead to tidal pools. In order to keep impact on the environment to a minimum (and to avoid getting lost, a not uncommon occurrence), you'll want to stick to the designated paths. The trail from the parking lot to the lighthouse viewpoint is a little steep, so wear your hiking boots and be prepared for a mildly strenuous return back up to your car. If you don't have a car, you can hop on a bus from downtown Vancouver and it will take you directly to a bus stop that's right by the park's entrance. When you're ready to go home, simply go to the other side of the street that you caught the bus and another one should will come by to pick you up.`,
              location: 'West Vancouver, BC',
              lat: '49.334339',
              lng: '-123.261446',
              weather: 'cloudy',
              start_date: 'Mar 16, 2019 14:30',
              end_date: 'Mar 16, 2019 16:30',
              url: 'http://localhost:5000/lighthouse.jpg'
            },
            {
              id: 1000,
              title: 'Hiking at Grouse Mountain',
              description: `For couples who like to challenge their workouts, Grouse Mountain is your spot. During warmer months, you'll want to hike the Grouse Grind. This 2.9-kilometer steep trek up the mountain is a tough one, but locals love it. Make sure to wear proper shoes and bring water. Should you rather appreciate the view without the sweating, take the gondola up. It's open year-round. At the top, enjoy the scenery with a cold pint and have a wander around. During the winter, the hills are covered with snow and make for great local skiing. They also have snowshoeing and other winter activities in the colder months. If there's one thing that remains the same at Grouse, it's has to be the view. It's a stunner throughout the year.` ,
              location: `6400 Nancy Greene Way,North Vancouver, BC V7R 4K9`,
              lat: '49.378863',
              lng: '-123.076821',
              weather: 'sunny',
              start_date: 'Mar 17, 2019 10:30',
              end_date: 'Mar 17, 2019 12:30',
              url: 'http://localhost:5000/p-1492157-10152204962653081-53473183-o_54_990x660_201404251300.jpg'
            },

          ])
        })
    }).then(()=>{
      return knex('messages').del()
        .then(() => {
          return knex('messages').insert([
            {
              id: 998,
              event_id: 999,
              user_id: 999,
              join_message: true,
              contents: 'admin',
            },
            {
              id: 999,
              event_id: 1000,
              user_id: 999,
              join_message: true,
              contents: 'admin',
            },
            {
              id: 1000,
              event_id: 1000,
              user_id: 900,
              join_message: true,
              contents: 'bob',
            },
            {
              id: 1001,
              event_id: 1000,
              user_id: 900,
              join_message: false,
              contents: 'Where is the meeting point?',
            },
            {
              id: 1002,
              event_id: 1000,
              user_id: 999,
              join_message: false,
              contents: 'At the Starbucks.',
            },
            {
              id: 1003,
              event_id: 1000,
              user_id: 900,
              join_message: false,
              contents: 'Ok~ Thanks.',
            }, {
              id: 1004,
              event_id: 999,
              user_id: 902,
              join_message: true,
              contents: 'Lily',
            }, {
              id: 1005,
              event_id: 999,
              user_id: 902,
              join_message: false,
              contents: 'Hello~',
            }
          ])
        })
    })
};
