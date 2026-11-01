const path = require("path");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const databasePath = path.join(__dirname, "books.db");

const initialBooks = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", price: 350, pages: 208 },
    { id: 2, title: "Wings of Fire", author: "A. P. J. Abdul Kalam", price: 299, pages: 180 },
    { id: 3, title: "Atomic Habits", author: "James Clear", price: 499, pages: 320 },
    { id: 4, title: "The Hobbit", author: "J. R. R. Tolkien", price: 399, pages: 310 },
    { id: 5, title: "1984", author: "George Orwell", price: 250, pages: 328 },
    { id: 6, title: "Pride and Prejudice", author: "Jane Austen", price: 275, pages: 432 },
    { id: 7, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 220, pages: 180 },
    { id: 8, title: "To Kill a Mockingbird", author: "Harper Lee", price: 325, pages: 281 },
    { id: 9, title: "The Book Thief", author: "Markus Zusak", price: 450, pages: 584 },
    { id: 10, title: "Ikigai", author: "Héctor García and Francesc Miralles", price: 299, pages: 208 }
];

const setupDatabase = async () => {
    try {
        console.log(`Setting up SQLite database at: ${databasePath}`);

        const db = await open({
            filename: databasePath,
            driver: sqlite3.Database,
        });

        await db.exec(`
            CREATE TABLE IF NOT EXISTS book (
                id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                author TEXT NOT NULL,
                price INTEGER NOT NULL,
                pages INTEGER NOT NULL
            );
        `);
        console.log("Verified 'book' table schema.");

        const existingCount = await db.get("SELECT COUNT(*) AS count FROM book");

        if (existingCount.count === 0) {
            console.log("Seeding sample book records...");
            for (const book of initialBooks) {
                await db.run(
                    "INSERT INTO book (id, title, author, price, pages) VALUES (?, ?, ?, ?, ?)",
                    book.id,
                    book.title,
                    book.author,
                    book.price,
                    book.pages
                );
            }
            console.log(`Inserted ${initialBooks.length} sample books.`);
        } else {
            console.log(`Database already has ${existingCount.count} records. No seed needed.`);
        }

        await db.close();
        console.log("Database setup completed successfully.");
    } catch (error) {
        console.error(`Database setup failed: ${error.message}`);
        process.exit(1);
    }
};

setupDatabase();
