module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'Games',
      [
        {
          game_name: 'Zelda II: The Adventure of Link',
          year: 1987,
          price: 150.00,
          image: 'https://i.postimg.cc/xdkT86WC/zelda-2.webp',
          console: 'NES',
        },
        {
          game_name: 'Four Swords Adventures',
          year: 2004,
          price: 200.00,
          image: 'https://i.postimg.cc/m2GwSqwv/foursw-ords.jpg',
          console: 'GBC',
        },
        {
          game_name: 'The Legend of Zelda',
          year: 1986,
          price: 180.00,
          image: 'https://i.postimg.cc/Kj4R7mWP/Legend-of-zelda-cover.png',
          console: 'NES',
        },
        {
          game_name: 'Tri Force Heroes',
          year: 2015,
          price: 270.00,
          image: 'https://i.postimg.cc/Njt2Sv2c/tri-force-heroes.jpg',
          console: '3DS',
        },
        {
          game_name: 'Phantom Hourglass',
          year: 2007,
          price: 260.00,
          image: 'https://i.postimg.cc/qq0d0wsz/phantom-hourglass.jpg',
          console: 'DS',
        },
        {
          game_name: 'Pokémon Red & Blue',
          year: 1996,
          price: 800.00,
          image: 'https://i.postimg.cc/904ymPcH/pokemon-red-blue.webp',
          console: 'GBC',
        },
        {
          game_name: 'Pokémon Yellow',
          year: 1998,
          price: 1922.00,
          image: 'https://i.postimg.cc/KYHndsyD/Pok-mon-Yellow-cover.png',
          console: 'GBC',
        },
        {
          game_name: 'Pokémon Stadium',
          year: 1999,
          price: 150.00,
          image: 'https://i.postimg.cc/RCXM4rYm/stadium-1.png',
          console: 'N64',
        },
        {
          game_name: 'Pokémon Stadium 2',
          year: 2000,
          price: 300.00,
          image: 'https://i.postimg.cc/NFMLBQ7y/stadium-2.jpg',
          console: 'N64',
        },
        {
          game_name: 'Pokémon Battle Revolution',
          year: 2006,
          price: 200.00,
          image: 'https://i.postimg.cc/c1gr9LHj/Pok-mon-Battle-Revolution-cover.png',
          console: 'WII',
        },
        {
          game_name: 'Final Fantasy VII',
          year: 1997,
          price: 690.00,
          image: 'https://i.postimg.cc/vmrv6vRr/ff7.jpg',
          console: 'PS1',
        },
        {
          game_name: 'Final Fantasy VIII',
          year: 1999,
          price: 400.00,
          image: 'https://i.postimg.cc/hPV1XqkJ/ff8.jpg',
          console: 'PS1',
        },
        {
          game_name: 'Final Fantasy X',
          year: 2001,
          price: 200.00,
          image: 'https://i.postimg.cc/Kc0RQpt9/ff10.jpg',
          console: 'PS2',
        },
        {
          game_name: 'Final Fantasy XIII',
          year: 2009,
          price: 170.00,
          image: 'https://i.postimg.cc/htWg0VZy/ff13.png',
          console: 'PS3',
        },
      ],

      { timestamps: false },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Games', null, {});
  },
};