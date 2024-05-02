const books = [
    { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { id: 2, title: "Pride and Prejudice", author: "Jane Austen" },
  ]; // array to store books 



class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }


  static async getAllBooks() {
    // Replace this with your actual logic to retrieve all books from the data source (e.g., database)
    return books; // Assuming 'books' is your in-memory array (for simplicity)
  } 

  static async getBookById(id) { // async await - read code line by line
    const books = await this.getAllBooks(); // Await the promise to get books
    const book = books.find((book) => book.id === id);
    return book;
  } //find 

  static async createBook(newBookData) {
    const books = await this.getAllBooks(); // Await the promise to get books
    const newBook = new Book(
      books.length + 1,
      newBookData.title,
      newBookData.author
    );

    books.push(newBook); // Assuming in-memory array (for simplicity)
    return newBook;

}


    static async updateBook(id, newBookData) {
        const books = await this.getAllBooks(); // Await the promise to get books
        const existingBookIndex = books.findIndex((book) => book.id === id);
        if (existingBookIndex === -1) {
          return null; // Indicate book not found
        }
    
        const updatedBook = {
          ...books[existingBookIndex], //... -> compare two ( old and new), the new will replace the old 
          ...newBookData, // only the updated or new one will change 
        };

        books[existingBookIndex] = updatedBook;
    return updatedBook;


}

static async deleteBook(id) {
    const books = await this.getAllBooks(); // Await the promise to get books
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return false; // Indicate book not found
    }

    books.splice(bookIndex, 1); //index - 0,1,2,3, the number of elements to delete
    return true;

n}
}

module.exports = Book;


