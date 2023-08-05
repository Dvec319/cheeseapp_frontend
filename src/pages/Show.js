import { useLoaderData, Form } from "react-router-dom";

function Show (props) {
    // get the data from our loader
    const cheese = useLoaderData();


    return (
        <div className="cheese">
            <h1>{cheese.name}</h1>
            <h2>{cheese.countryOfOrigin}</h2>
            <img src={cheese.image} alt={cheese.name}/>

            <h2>Update {cheese.name}</h2>
            <Form action={`/update/${cheese._id}`} method='post' className="updatedCheese">
                <input type="text" name="name" placeholder="Name of cheese" defaultValue={cheese.name}/>
                <input type="text" name="countryOfOrigin" placeholder="Country of Origin" defaultValue={cheese.countryOfOrigin}/>
                <input type="text" name="image" placeholder="Image of the cheese" defaultValue={cheese.image}/>
                <input type="submit" value={`Update ${cheese.name}`}/>
            </Form>
            <h2>Delete {cheese.name}</h2>
            <Form action={`/delete/${cheese._id}`} method="post" className="deleteCheese">
                <input type="submit" value={`Delete ${cheese.name}`}/>
            </Form>
        </div>
    )
}

export default Show;