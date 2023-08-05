import { baseUrl } from "./base_url";

export const cheesesLoader = async ()  => {
    // make a call to the backend index route
    const response = await fetch(`${baseUrl}/cheeses`)
    // convert the response into a js object
    const cheeses = await response.json();
    // return the cheeses
    return cheeses
}

export const cheeseLoader = async ({params}) => {
    // get the id from the params object
    const id = params.id
    // make a call to the backend show route
    const response = await fetch(`${baseUrl}/cheeses/${id}`)
    // convert the response into an object
    const cheese = await response.json()
    // return the cheese
    return cheese
}