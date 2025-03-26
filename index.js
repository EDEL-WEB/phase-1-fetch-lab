




function fetchBooks() {
  function fetchBooks() {
    console.log("Fetching data from API...");

    fetch("https://anapioficeandfire.com/api/books")
        .then(response => {
            console.log("Response received:", response);
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data); 
            renderBooks(data);
        })
        .catch(error => console.error("Error fetching books:", error));
}

  
  
  
}

function renderBooks(books) {
  console.log("Rendering books:", books); 

  const main = document.querySelector("main");
  books.forEach(book => {
      const h2 = document.createElement("h2");
      h2.textContent = book.name || book.title; 
      main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
