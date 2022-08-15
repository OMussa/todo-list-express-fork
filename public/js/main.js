const deleteBtn = document.querySelectorAll('.fa-trash') //assigning the 'deleteBtn' to the class fa-trash which is a favicon (trash icon)
const item = document.querySelectorAll('.item span') // assigning 'item' to the spans that have a parent class of item
const itemCompleted = document.querySelectorAll('.item span .completed') //assigning 'itemCompleted' to spans with a 'completed' class that has a parent of a class of item

Array.from(deleteBtn).forEach((element)=>{ //creating an array from our selection and starting a loop (there could be mutliple trash can buttons
    // thats why its being turned into an array)
    element.addEventListener('click', deleteItem) // adding an event listener for each of the deleteBtn (runs the deleteItem function on click)
})//closing loop

Array.from(item).forEach((element)=>{ // creating an array for the spans with the parent class of item and looping through it
    element.addEventListener('click', markComplete)// adding an event listener for each of the items (runs the markComplete function on click)
}) //closing loop

Array.from(itemCompleted).forEach((element)=>{ // creating an array from the itemCompleted variable and looping through it
    element.addEventListener('click', markUnComplete)// adding an event listener to only completed items
})//closing loop

async function deleteItem(){ //declaring an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item and grabs only the inner text within the list span
    try{ // starting a try block to do something 
        const response = await fetch('deleteItem', { //creating a response variable that waits on a fetch to get data from the result of deleteItem route
            method: 'delete', //sets the CRUD method for the route
            headers: {'Content-Type': 'application/json'}, //specifying the type of content expected, which is JSON
            body: JSON.stringify({ //declare the message content being passed, and stringify the content
              'itemFromJS': itemText //setting the content of the body to the inner text of the list item, and naming it 'itemFromJS'
            })//closing the body
          }) //closing the object
        const data = await response.json()// waiting to get some JSON back and assigning it to the data variable
        console.log(data) //logging the data to the console
        location.reload()//refreshing the page

    }catch(err){//catching any error the try throws 
        console.log(err)//logging the error to the console
    }//closing the catch
}//closing the function

async function markComplete(){//declaring an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText // looks inside of the list item and grabs only the inner text within the list span
    try{//starting a try block
        const response = await fetch('markComplete', {//creating a response variable that waits on a fetch to get data from the result of the markComplete route
            method: 'put',//setting the CRUD method to update for the rpute
            headers: {'Content-Type': 'application/json'},//specifying the content type which is JSON
            body: JSON.stringify({ //declare the message content being passed, and stringify the content
                'itemFromJS': itemText //setting the content of the body to the inner text of the list item, and naming it 'itemFromJS'
            })//closing the body
          })//closing the object
        const data = await response.json()//waiting to get some JSON back and assigning it to the data variable
        console.log(data)//logging data to the console
        location.reload()//refreshing the page

    }catch(err){ //catching any error thrown by the try block
        console.log(err)//logging the error
    }//closing the catch
}//closing the function

async function markUnComplete(){//declaring an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText //looks inside of the list item and grabs only the inner text within the list span
    try{//declaring a try block
        const response = await fetch('markUnComplete', {//waiting for a response from the markUncomplete route and assinging it to response
            method: 'put',//setting the CRUD method to update for the route
            headers: {'Content-Type': 'application/json'},//specifying the content type to JSON
            body: JSON.stringify({// stringifying the content within the body
                'itemFromJS': itemText//setting the content of the body to the inner text of the list item, and naming it 'itemFromJS'
            })//closing the body
          })//closing the object
        const data = await response.json()// assigning the response we are waiting on to data
        console.log(data)//logging data to the console
        location.reload()//refreshing the page

    }catch(err){// catching any error thrown by the try block
        console.log(err)//logging the error
    }//closing the catch
}//closing the function