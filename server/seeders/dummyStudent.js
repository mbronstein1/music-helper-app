const dummyStudent = {
  firstName: 'Young',
  lastName: 'Mikey',
  email: 'test1@test.com',
  password: '12345678',
  instruments: ['Horn'],
  homework: [
    {
      dueDate: new Date().toISOString(),
      assignments: [
        {
          topic: 'Etudes',
          list: ['Etude 1', 'Etude 2'],
        },
        {
          topic: 'Solos',
          list: ['Solo 1', 'Solo 2'],
        },
        {
          topic: 'Excerpts',
          list: ['Excerpt 1', 'Excerpt 2'],
        },
      ],
    },
  ],
};

module.exports = dummyStudent;
