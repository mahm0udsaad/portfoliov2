import { MongoClient } from "mongodb";

export async function POST(Request) {
    // const { buffer } = Request.body;
    console.log(Request.body)
    // try {
    //     const client = new MongoClient(process.env.DB_URL);
    //     await client.connect();

    //     const portfolio = client.db('portfolio');
    //     const work = portfolio.collection('latest_work');

    //     // Insert the document into the collection
    //     if(formData){
    //         const insertionResult = await work.insertOne({formData});
    //         console.log('Insertion Result:', insertionResult);
            
            
    //         console.log("Inserted Successfully");
    //         return Response.json({ insertionResult });
    //     }
    // } catch (err) {
    //     console.log(err);
    //     return Response.json({ Error: err });
    // }
}