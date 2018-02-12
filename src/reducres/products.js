let initialState = [
    {
        id: 1,
        name: 'Iphone 7s',
        image: 'https://cdn.tgdd.vn/Products/Images/42/88973/iphone-7s-1-400x460.png',
        description: 'san pham 123',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung galaxy S7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74113/samsung-galaxy-s7-2-400x460.png',
        description: 'aeqwe qw eqw e',
        price: 300,
        inventory: 3,
        rating: 4
    },
    {
        id: 3,
        name: 'Iphone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        description: 'asd asd as asd',
        price: 1000,
        inventory: 5,
        rating: 5
    }
];

const product = (state = initialState, action) => {
    switch(action.type){
        default:
            return [...state];
    }
}

export default product;