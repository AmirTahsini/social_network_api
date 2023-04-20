const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

  const users = [
    {
      username: 'Amir',
      email: 'test@gmail.com',
      friends: [{ username: 'Mike' }, { username: 'Mary' }],
    },
    {
      username: 'Mike',
      email: 'test1@gmail.com',
      friends: [{ username: 'Amir' }],
    },
    {
      username: 'Mary',
      email: 'test2@gmail.com',
      friends: [{ username: 'Amir' }],
    },
  ];

  const thoughts = [
    {
      thoughtText: 'Testing a thought',
      username: 'Amir',
    },
    {
      thoughtText: 'Testing another thought',
      username: 'Mike',
    },
    {
      thoughtText: 'Testing more thoughts',
      username: 'Mary',
    },
  ];

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
