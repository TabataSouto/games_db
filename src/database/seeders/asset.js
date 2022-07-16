module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Assets', [
    {
      paper: 'AZUL4',
      quantity: 1,
      amount: 350.00,
    },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
    // {
    //   paper: '',
    //   quantity: 0,
    //   amount: 0,
    // },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkCreate('Assets', null, {}),
};
