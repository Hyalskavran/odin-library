let myLibrary = []

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}

let hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'No')
myLibrary.push(hobbit)

const populateLibrary = () => {
    const table = document.querySelector('#tableBody')

    myLibrary.forEach(book => {
        let tableRow = document.createElement('tr')
        tableRow.dataset.id = myLibrary.indexOf(book)

        const cols = ['title', 'author', 'pages', 'isRead']

        for (const col of cols) {
            let td = document.createElement('td')
            td.textContent = book[col]
            tableRow.appendChild(td)
        }

        const tdBtn = document.createElement('td')
        const btn = document.createElement('button')
        btn.textContent = 'Delete'
        btn.onclick = function() {
            deleteBook(myLibrary.indexOf(book))
        }

        tdBtn.appendChild(btn)
        tableRow.appendChild(tdBtn)

        let toggle = document.createElement('td')
        let toggleBtn = document.createElement('button')
        toggleBtn.textContent = 'Toggle'
        toggleBtn.onclick = function() {
            toggleRead(myLibrary.indexOf(book))
        }

        toggle.appendChild(toggleBtn)
        tableRow.appendChild(toggle)
        
        table.appendChild(tableRow)
    })
}

const toggleRead = (id) => {
    if (myLibrary[id].isRead == "Yes") {
        myLibrary[id].isRead = "No"
    } else {
        myLibrary[id].isRead = "Yes"
    }

    const rowToChange = document.querySelector(`tr[data-id="${id}"]`)
    const colToChange = rowToChange.querySelector('td:nth-child(4)')
    colToChange.textContent = myLibrary[id].isRead
}

const deleteBook = (dataId) => {
    const row = document.querySelector(`tr[data-id="${dataId}"]`)
    row.remove()
}

const addBook = (title, author, pages, isRead) => {
    let newBook = new Book(title, author, pages, isRead)
    const table = document.querySelector('#tableBody')

    myLibrary.push(newBook)

    const row = document.createElement('tr')
    row.dataset.id = myLibrary.indexOf(newBook)

    const cols = ['title', 'author', 'pages', 'isRead']

    for (const col of cols) {
        let td = document.createElement('td')
        td.textContent = newBook[col]
        row.appendChild(td)
    }

    tdBtn = document.createElement('td')
    btn = document.createElement('button')
    btn.textContent = 'Delete'
    btn.onclick = function() {
        deleteBook(myLibrary.indexOf(newBook))
    }

    tdBtn.appendChild(btn)
    row.appendChild(tdBtn)

    let toggle = document.createElement('td')
    let toggleBtn = document.createElement('button')
    toggleBtn.textContent = 'Toggle'
    toggleBtn.onclick = function() {
        toggleRead(myLibrary.indexOf(newBook))
    }

    toggle.appendChild(toggleBtn)
    row.appendChild(toggle)

    table.appendChild(row)
}

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.querySelector('#title')
    let author = document.querySelector('#author')
    let pages = document.querySelector('#pages')
    let isRead = document.querySelector('input[name="isRead"]:checked')

    addBook(title.value, author.value, pages.value, isRead.value)

    title.value = ''
    author.value = ''
    pages.value = ''
})

populateLibrary(myLibrary)