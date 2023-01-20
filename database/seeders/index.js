module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'Games',
      [
        {
          name: 'Zelda II: The Adventure of Link',
          year: 1987,
          console: 'NES',
        },
        {
          name: ' Four Swords Adventures',
          year: 2004,
          console: 'GB',
        },
        {
          name: 'The Legend of Zelda',
          year: 1986,
          console: 'NES',
        },
        {
          name: 'Tri Force Heroes',
          year: 2015,
          console: '3DS',
        },
        {
          name: 'Phantom Hourglass',
          year: 2007,
          console: 'DS',
        },
        {
          name: 'Pokémon Red & Blue',
          year: 1996,
          console: 'GBC',
        },
        {
          name: 'Pokémon Yellow',
          year: 1998,
          console: 'GBC',
        },
        {
          name: 'Pokémon Stadium',
          year: 1999,
          console: 'N64',
        },
        {
          name: 'Pokémon Stadium 2',
          year: 2000,
          console: 'N64',
        },
        {
          name: 'Pokémon Battle Revolution',
          year: 2006,
          console: 'WII',
        },
        {
          name: 'Final Fantasy VII',
          year: 1997,
          console: 'PS1',
        },
        {
          name: 'Final Fantasy VIII',
          year: 1999,
          console: 'PS1',
        },
        {
          name: 'Final Fantasy X',
          year: 2001,
          console: 'PS2',
        },
        {
          name: 'Final Fantasy XIII',
          year: 2009,
          console: 'PS3',
        },
      ],

      { timestamps: false },
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {});
  },
};
