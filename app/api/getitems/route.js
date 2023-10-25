import { MongoClient } from "mongodb";

export async function GET(){
    try {
      const client = new MongoClient(process.env.DB_URL);
      await client.connect();
  
      const portfolio = client.db('portfolio');
      const work = portfolio.collection('latest_work');
  
      const data = await work.find({}).toArray();
  
      return Response.json(data);

        } catch (err) {
            console.log(err);
        }
}