
export async function DELETE(Request){
    const {_id} = Request.params;
    try {
      const client = new MongoClient(process.env.DB_URL);
      await client.connect();
  
      const portfolio = client.db('portfolio');
      const work = portfolio.collection('latest_work');
  
  
      return Response.json(_id);

        } catch (err) {
            console.log(err);
        }
}