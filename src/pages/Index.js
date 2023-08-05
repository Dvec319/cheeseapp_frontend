import { Link, useLoaderData, Form } from "react-router-dom";

function Index (props)  {
    // get the data from our loader
    const cheeses = useLoaderData();

    return (
        <div>
            <h2 className="create">Create a Cheese</h2>
            <Form action="/create" method="post" className="newCheese">
                <input type="text" name="name" placeholder="Name of the cheese" />
                <input type="text" name="countryOfOrigin" placeholder="Country of Origin" />
                <input type="text" name="image" placeholder="Image of the cheese" />
                <input type="submit" value="Create Cheese" />
            </Form>
            {cheeses.map((cheeses, index) => {
                return (
                    <div key={cheeses._id} className='cheeses'>
                        <Link to={`/${cheeses._id}`}>
                            <h1>{cheeses.name}</h1>
                        </Link>
                        <img src={cheeses.image} alt={cheeses.name}/>
                        <h3>{cheeses.countryOfOrigin}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Index;