window.addEventListener("load", () => {
  UI.displayBooks();

  const $form = document.querySelector(".form");
  const $fileName = document.querySelector(".file-name");
  const $inputImage = document.querySelector("#image-book");
  $form.addEventListener("submit", handleForm);
  $inputImage.addEventListener("change", () => ($fileName.innerText = $inputImage.value.split(/(\\|\/)/g).pop()));
});

async function handleForm(event) {
  function hasInputEmpty() {
    return [...$form.querySelectorAll("input")].some((c) => c.value === "");
  }

  const $form = event.target;
  event.preventDefault();

  if (hasInputEmpty()) {
    UI.showAlert("Preencha todos os campos");
    return;
  }

  const [$image, $title, $author, $isbn] = $form;
  const titleValue = $title.value;
  const authorValue = $author.value;
  const isbnValue = $isbn.value;
  const imageParsed = await UI.readFile($image.files[0]);

  const book = new Book(titleValue, authorValue, isbnValue, imageParsed);
  UI.addBookToList(book);
  Store.addBook(book);
  UI.showAlert("Livro adicionado com sucesso");
  UI.clearFields();
}
