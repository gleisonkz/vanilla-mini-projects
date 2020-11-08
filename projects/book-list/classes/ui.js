class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }

  static addBookToList($book) {
    const $bookList = document.querySelector(".book-list");
    const $bookDiv = UI.createElementWithClass("div", "book-list__item");

    $bookDiv.innerHTML = `    
    <img class="item__image" src="${$book.image}" alt="Book Image" />
    <button class="btn-delete"><i class="fas fa-trash-alt"></i> remover</button>
    <div class="book-list__item-info">
      <span class="text-name">Name: <span>${$book.title}</span></span>
      <span class="text-author">Author: <span>${$book.author}</span> </span>
      <span class="text-isbn">ISBN: <span class="isbn-value">${$book.isbn}</span> </span>
    </div>    
    `;

    $bookList.appendChild($bookDiv);
    setTimeout(() => {
      $bookDiv.classList.add("fadeIn");
    }, 200);

    const $button = $bookDiv.querySelector(".btn-delete");

    $button.addEventListener("click", () => {
      const $book = $button.parentElement;
      const isbn = $book.querySelector(".isbn-value").innerText;
      UI.deleteBook($book);
      Store.removeBook(isbn);
    });
  }

  static deleteBook($book) {
    $book.classList.add("slide-right");
    setTimeout(() => {
      $book.remove();
      UI.showAlert("Livro removido com sucesso");
    }, 1200);
  }

  static clearFields() {
    document.querySelector(".file-name").textContent = "no chosen file";
    const $inputs = document.querySelectorAll(".form input");
    $inputs.forEach(($input) => ($input.value = ""));
  }

  static showAlert(message) {
    const $snackBar = document.querySelector(".snack-bar");
    $snackBar.innerText = message;
    $snackBar.classList.add("show");
    setTimeout(() => {
      $snackBar.classList.remove("show");
    }, 3000);
  }

  static createElementWithClass(selector, className) {
    const $element = document.createElement(selector);
    $element.className = className;
    return $element;
  }

  static readFile(file) {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing with file."));
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(file);
    });
  }
}
