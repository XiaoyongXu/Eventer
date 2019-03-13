
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
              id: 997,
              title: 'Capilano Suspension Bridge and Regional Park',
              description: `About 15 to 20 minutes from downtown Vancouver is North Vancouver's most famous attraction, the Capilano Suspension Bridge. This popular spot sees some 800,000 visitors each year. The original bridge was built in 1889, and although it's been replaced since then, there's been a bridge here ever since. Swaying 230 feet above the Capilano River, the plank and cable bridge stretches 450 feet from one side to the other. Other attractions at the park include the world's largest privately owned collection of totem poles, totem carving demonstrations, hiking trails, their Treetops Adventures, the Cliffwalk, two restaurants and a gift shop. Come late November, Canyon Lights takes over and makes for a stunning light exhibition that's just in time for the holiday season.`,
              location: `3735 Capilano Rd,North Vancouver, BC V7R 4J1`,
              lat: '49.342826',
              lng: '-123.114625',
              weather: 'sunny',
              start_date: 'Mar 14, 2019 15:30',
              end_date: 'Mar 14, 2019 16:30',
              url:'http://localhost:5000/p-capilano-suspension-bridge-and-regional-park-vancouver-bc-canada-attractions-parks-beaches-981113_54_990x660_201405311539.jpg'
            },
            {
              id: 998,
              title: 'Lighthouse Park',
              description: `This rugged, forested park, which is located along West Vancouver's Marine Drive and 20 to 25 minutes from downtown, features several trails that lead to tidal pools. In order to keep impact on the environment to a minimum (and to avoid getting lost, a not uncommon occurrence), you'll want to stick to the designated paths. The trail from the parking lot to the lighthouse viewpoint is a little steep, so wear your hiking boots and be prepared for a mildly strenuous return back up to your car. If you don't have a car, you can hop on a bus from downtown Vancouver and it will take you directly to a bus stop that's right by the park's entrance. When you're ready to go home, simply go to the other side of the street that you caught the bus and another one should will come by to pick you up.`,
              location: 'West Vancouver, BC',
              lat: '49.334339',
              lng: '-123.261446',
              weather: 'cloudy',
              start_date: 'Mar 13, 2019 14:30',
              end_date: 'Mar 13, 2019 16:30',
              url: 'http://localhost:5000/lighthouse.jpg'
            },
            {
              id: 999,
              title: 'WildPlay Elements Park',
              description: `Get outside of the city and head to WildPlay Park, just outside of Maple Ridge's Golden Ears Park. What was once an old camp ground has now been revitalized into an interactive park that will keep kids (and adults) happy and entertained. The park is a series of treetop adventures, ziplines and other adrenaline inducing activities. The treetop adventures get you to traverse ziplines, swing on ropes, climb scrambling walls and hanging nets, test your balance on wobbly bridges, and navigate other fun challenges. The park has areas that are specifically for younger children and those ages 12 and up. This park is only about an hour away from Vancouver and is an ideal day trip`,
              location: `23485 Fern Crescent,Maple Ridge, BC V4R 2S6`,
              lat: '49.241217',
              lng: '-122.571370',
              weather: 'cloudy',
              start_date: 'Mar 13, 2019 10:30',
              end_date: 'Mar 13, 2019 12:30',
              url: 'http://localhost:5000/WildPlayElementsPark.jpg'
            },
            {
              id: 1000,
              title: 'Snowboarding at Grouse Mountain',
              description: `For couples who like to challenge their workouts, Grouse Mountain is your spot. During warmer months, you'll want to hike the Grouse Grind. This 2.9-kilometer steep trek up the mountain is a tough one, but locals love it. Make sure to wear proper shoes and bring water. Should you rather appreciate the view without the sweating, take the gondola up. It's open year-round. At the top, enjoy the scenery with a cold pint and have a wander around. During the winter, the hills are covered with snow and make for great local skiing. They also have snowshoeing and other winter activities in the colder months. If there's one thing that remains the same at Grouse, it's has to be the view. It's a stunner throughout the year.` ,
              location: `6400 Nancy Greene Way,North Vancouver, BC V7R 4K9`,
              lat: '49.378863',
              lng: '-123.076821',
              weather: 'sunny',
              start_date: 'Mar 14, 2019 10:30',
              end_date: 'Mar 14, 2019 12:30',
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
