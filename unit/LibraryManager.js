// libraryManager.js
const fs = require('fs').promises;

class LibraryManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async addBook(book) {
    if (!book.id || !book.title) {
      throw new Error('Book must have an id and title');
    }
    const books = await this._readBooks();
    if (books.some(b => b.id === book.id)) {
      throw new Error('Book with this id already exists');
    }
    books.push(book);
    await this._writeBooks(books);
    return book;
  }

  async removeBook(id) {
    const books = await this._readBooks();
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
      throw new Error('Book not found');
    }
    const [removedBook] = books.splice(index, 1);
    await this._writeBooks(books);
    return removedBook;
  }

  async getBook(id) {
    const books = await this._readBooks();
    const book = books.find(book => book.id === id);
    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }

  async getAllBooks() {
    return await this._readBooks();
  }

  async _readBooks() {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      }
      throw error;
    }
  }

  async _writeBooks(books) {
    await fs.writeFile(this.filePath, JSON.stringify(books, null, 2), 'utf-8');
  }
}

module.exports = LibraryManager;
