// libraryManager.test.js
const fs = require('fs').promises;
const LibraryManager = require('./test/LibraryManager');

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn(),
  },
}));

describe('LibraryManager', () => {
  let libraryManager;

  beforeEach(() => {
    libraryManager = new LibraryManager('/path/to/books.json');
  });

  test('should add a book correctly', async () => {
    const bookData = { id: 1, title: 'The Great Gatsby' };
    fs.readFile.mockResolvedValue('[]');
    fs.writeFile.mockResolvedValue();

    const result = await libraryManager.addBook(bookData);

    expect(result).toEqual(bookData);
    expect(fs.readFile).toHaveBeenCalledWith('/path/to/books.json', 'utf-8');
    expect(fs.writeFile).toHaveBeenCalledWith('/path/to/books.json', JSON.stringify([bookData], null, 2), 'utf-8');
  });

  test('should not add a book with duplicate id', async () => {
    const bookData = { id: 1, title: 'The Great Gatsby' };
    fs.readFile.mockResolvedValue(JSON.stringify([bookData]));
    fs.writeFile.mockResolvedValue();

    await expect(libraryManager.addBook(bookData)).rejects.toThrow('Book with this id already exists');
  });

  test('should remove a book correctly', async () => {
    const bookData = { id: 1, title: 'The Great Gatsby' };
    fs.readFile.mockResolvedValue(JSON.stringify([bookData]));
    fs.writeFile.mockResolvedValue();

    const result = await libraryManager.removeBook(1);

    expect(result).toEqual(bookData);
    expect(fs.readFile).toHaveBeenCalledWith('/path/to/books.json', 'utf-8');
    expect(fs.writeFile).toHaveBeenCalledWith('/path/to/books.json', JSON.stringify([], null, 2), 'utf-8');
  });

  test('should throw error when removing a non-existent book', async () => {
    fs.readFile.mockResolvedValue('[]');

    await expect(libraryManager.removeBook(1)).rejects.toThrow('Book not found');
  });

  test('should get a book correctly', async () => {
    const bookData = { id: 1, title: 'The Great Gatsby' };
    fs.readFile.mockResolvedValue(JSON.stringify([bookData]));

    const result = await libraryManager.getBook(1);

    expect(result).toEqual(bookData);
    expect(fs.readFile).toHaveBeenCalledWith('/path/to/books.json', 'utf-8');
  });

  test('should throw error when getting a non-existent book', async () => {
    fs.readFile.mockResolvedValue('[]');

    await expect(libraryManager.getBook(1)).rejects.toThrow('Book not found');
  });

  test('should get all books correctly', async () => {
    const book1 = { id: 1, title: 'The Great Gatsby' };
    const book2 = { id: 2, title: 'Moby Dick' };
    fs.readFile.mockResolvedValue(JSON.stringify([book1, book2]));

    const result = await libraryManager.getAllBooks();

    expect(result).toEqual([book1, book2]);
    expect(fs.readFile).toHaveBeenCalledWith('/path/to/books.json', 'utf-8');
  });
});
