const card = document.getElementsByClassName("card")
let myLibrary = []
function Books(title, author, pages, read){
	this.title = title
	this.author = author
	this.pages = pages
	this.read = false
}

// Add a Books to the Library
function addBookToLibrary(book) {
	myLibrary.push(book)
}


const buttonPower = document.getElementById("buttonPower")
buttonPower.addEventListener('click', (e) => {
	e.preventDefault()
	addNewBook()
})
// Create Books and get input from The user
function addNewBook(){
	const title = document.getElementById("title");
	const author = document.getElementById("author")
	const pages = document.getElementById("pages")
	const read = document.getElementById("read")
	const newBook = new Books(title.value, author.value, pages.value, read.checked)
	addBookToLibrary(newBook)
	displayBooks()
	closePop()
}
const popOut = document.getElementById("popOut")
function  openPop(){
	popOut.classList.add("popIn")
}

function  closePop(){
	popOut.classList.remove("popIn")
}

// Display result
function displayBooks(){
	const card = document.getElementById("card")
	card.textContent = ""

	myLibrary.forEach((book) => {
		const divContent = document.createElement("div");
		divContent.classList.add("divContent")

		const titleElement = document.createElement("h1")
		titleElement.textContent = `${book.title}`
		divContent.appendChild(titleElement);

		const authorElement = document.createElement("p")
		authorElement.textContent = `Author: ${book.author}`
		divContent.appendChild(authorElement)

		const pagesElement = document.createElement("span")
		pagesElement.textContent = `Pages: ${book.pages}`
		divContent.appendChild(pagesElement)

		const removeButton = document.createElement("button")
		removeButton.innerText = "Remove"
		removeButton.addEventListener('click', (e) => {
			const getIndex = myLibrary.indexOf(book)
			myLibrary.splice(getIndex, 1)
			displayBooks()
		})
		divContent.appendChild(removeButton)

		const ChangeButton = document.createElement("button")
		ChangeButton.textContent = book.read == "yes" ? "Mark Unread" : "Mark Read"
		ChangeButton.addEventListener('click', (e) => {
			const getIndex = myLibrary.indexOf(book)
			if(book.read === "true")
			{
				book.read = "false"
			}
			else if(book.read === "false"){
				book.read = "true"
			}
			displayBooks()

		})

		divContent.appendChild(ChangeButton)
		card.appendChild(divContent)
	})
}