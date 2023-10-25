import { MongoClient } from "mongodb";

const coll =async () => {
    const client = new MongoClient(process.env.DB_URL);
    await client.connect();

    const portfolio = client.db('portfolio');
    const work = portfolio.collection('latest_work');
    return work;
}
export default coll