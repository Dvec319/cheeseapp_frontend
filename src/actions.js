// this is the url for our backend server
import { baseUrl } from "./base_url";
// this is a function that allows us to redirect to other routes
import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
    // getting the data from the form in the request
    const formData = await request.formData();
    // setting up the object for our new cheese
    const newCheese = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('countryOfOrigin')
    }
    // send the new cheese to our backend API
    await fetch(`${baseUrl}/cheeses`, {
        // tell fetch to make a post request
        method: 'post',
        headers: {
            // tells the backend the data is JSON
            "Content-Type": "application/json"
        },
        // send the json string of the newCheese object
        body: JSON.stringify(newCheese)
    })

    // redirect the user back to the frontend index route
    return redirect('/')
}

export const updateAction = async ({request, params}) => {
    // grabbing the id from the params
    const id = params.id
    // grab the data from the form
    const formData = await request.formData();
    // building out the updated cheese
    const updatedCheese = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('countryOfOrigin')
    }
    // send the updated cheese to our backend API
    await fetch(`${baseUrl}/cheeses/${id}`, {
        // tell fetch to make a put request
        method: 'Put',
        //tell the backend the data is JSON
        headers: {
            "Content-Type": "application/json"
        },
        // send the json string of the updatedCheese object
        body: JSON.stringify(updatedCheese)
    })
    // redirect back to show page frontend route
    return redirect(`/${id}`)
}

export const deleteAction = async ({params}) => {
    // grabbing the id from the params
    const id = params.id
    // send a delete request to our backend API
    await fetch(`${baseUrl}/cheeses/${id}`, {
        // tell fetch to make a delete request
        method: 'DELETE'
        // no headers or body are required when making delete requests
    })
    // redirect back to the frontend index route
    return redirect('/')
}