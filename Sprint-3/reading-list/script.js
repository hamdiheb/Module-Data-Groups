const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];



function booksDisplay(){
  const readingList = document.getElementById("reading-list");

  // readingList.innerHTML = `${books.map((element) => `<li>
  //                                                    <h1>${element.title}</h1>
  //                                                    <h3>${element.author}
  //                                                    <p>${element.alreadyRead}</p> 
  //                                                    <img src='${element.bookCoverImage}'/>
  //                                                    </li>` ).join('')}`

  let content = [];
  books.forEach(element =>{
    if(element.alreadyRead === false){
      content.push(`<li style='background-color: red'><h1>${element.title}</h1><h3>${element.author}</h3><img src='${element.bookCoverImage}'/><li>`)
    }
    else{
      content.push(`<li style='background-color: green'><h1>${element.title}</h1><h3>${element.author}</h3><img src='${element.bookCoverImage}'/><li>`)   
    }
  })
  readingList.innerHTML = content.join('');
}

booksDisplay()