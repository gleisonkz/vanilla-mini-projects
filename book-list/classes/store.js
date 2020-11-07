class Store {
  static getBooks() {
    const books = JSON.parse(localStorage.getItem("books")) ?? [];
    return books;
  }

  static addBook($book) {
    const books = Store.getBooks();
    books.push($book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      console.log(book.isbn);
      console.log(isbn);
      book.isbn === isbn && books.splice(index, 1);
    });
    console.log(books);
    localStorage.setItem("books", JSON.stringify(books));
  }
}
