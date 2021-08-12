// Library Project

let myLibrary = [];

// Book object constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book.prototype.info = function() { // info function for book.prototype
    let readHelp = function() {
        if (this.read) {return "already read";}
        else {return "not read yet";}
    }
    let info = this.title + " by " + this.author + ", " +
    this.pages + " pages, " + readHelp();
    return info;
}

book.prototype.toggleRead = function() { // toggles read true/false
    this.read = !this.read;
}


function addBookToLibrary(newBook) { // Pushes a new book into the library
    myLibrary.push(newBook);
}

// TODO Adding a book
// Event Listener for an add book button
/* 
   get form elements from the document and pass the values
   to a new book object, then call addBookToLibrary()
*/