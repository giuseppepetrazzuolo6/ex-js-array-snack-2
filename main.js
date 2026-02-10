const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

/*Snack 1 - Filtra e Modifica
Crea un array (longBooks) con i libri che hanno più di 300 pagine;
Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
Stampa in console ogni titolo nella console.*/

//+ 300 pagine
const longBooks = books.filter(book => book.pages > 300)
console.log('books', longBooks)

//solo titoli
const longbooksTitles = books.map(book => book.title)
console.log('title', longbooksTitles)

/*Snack 2 - Il primo libro scontato
Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, 
ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).*/

//solo disponibili
const availableBooks = books.filter(book => book.available === true)
console.log('disponibili', availableBooks)

//prezzo scontato
const discountedBooks = availableBooks.map(b => {
    const discountedPrice = parseFloat(b.price) * 0.8
    return {
        ...b,
        price: `${discountedPrice.toFixed(2)}€`
    }

})
console.log(discountedBooks)

//solo prezzo intero
const fullPricedBook = discountedBooks.find(b => {
    const number = parseFloat(b.price)
    return Number.isInteger(number)
})
console.log(fullPricedBook)

/*Snack 3 - Ordinare gli Autori
Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)*/

//solo autori
const authors = books.map(b => b.author)
console.log('autori', authors)

//sono maggiorenni?
const areAuthorsAdults = authors.every(a => a.age >= 18)
console.log(areAuthorsAdults)

//età decrscente
authors.sort((a, b) => {
    return b.age - a.age
})
console.log(authors)

/*Snack 4 - Calcola l’età media
Creare un array (ages) che contiene le età degli autori dei libri.
Calcola la somma delle età (agesSum) usando reduce.
Stampa in console l’età media degli autori dei libri.*/

//solo età autori
const ages = books.map(b => b.author.age)
console.log(ages)

//somma età
const somma = ages.reduce((acc, numero) => {
    return acc + numero
}, 0)
console.log(somma)

//media età
const etaMedia = somma / ages.length
console.log(etaMedia)