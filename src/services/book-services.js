

const MOCK_DATA =[
    {
        id: 1,
        title: 'You Dont know JS',
        author: 'Kyle Simpson',
        price: 100,
    coverImage: 'https://s1.livelib.ru/boocover/1001506917/200x305/4a12/boocover.jpg'
    },
    {
        id: 2,
        title: 'Release IT',
        author: 'Michale T.Nyqard',
        price: 1,
        coverImage:'https://img3.labirint.ru/rc/64e84c8388de3963b9c3adf9490c84be/220x340/books50/499059/cover.jpg?1563856058'
    }

]


let getBook = new Promise((resolve)=>{
   function randomInteger(min, max) {
       let rand = min + Math.random() * (max + 1 - min);
     return Math.floor(rand);
   }

   const randomNumber = randomInteger(1, 4);

   if (randomNumber === 4) {
    throw Error
   }
   setTimeout(() => resolve(MOCK_DATA), 500);
})


export { getBook };




