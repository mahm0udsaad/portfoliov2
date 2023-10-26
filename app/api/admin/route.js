import { MongoClient , GridFSBucket } from "mongodb";
import fs from 'fs';

export async function POST(Request) {

    const data = await Request.formData()
    const file = data.get('file')
    const name = data.get('name')
    const link = data.get('link')
    const brief = data.get('brief')
    const description = data.get('description')

    if(!file){
        return Response.json({success: false });
    }
    
    console.log(file.path);
    
    try {
        const client = new MongoClient(process.env.DB_URL);
        await client.connect();
        
        const portfolio = client.db('portfolio');
        const bucket = new GridFSBucket(portfolio, { bucketName: 'Bucket' });
        const work = portfolio.collection('latest_work');
        
        const uploadStream =  bucket.openUploadStream(name);
        const fileStream =  fs.createReadStream(file.path);
        fileStream.pipe(uploadStream);
        uploadStream.on('finish',async (fileInfo) => {
            console.log('Image stored with ID:', fileInfo._id);
            const image =fileInfo._id;

        const clientData = {
            image,
            name,
            link,
            brief,
            description
        }
        if(clientData){
            const insertionResult = await work.insertOne(clientData);
            console.log('Insertion Result:', insertionResult);
            
            console.log(name +" "+ " Inserted Successfully");
            return Response.json({ insertionResult });
        }
        })
    } catch (err) {
        console.log(err);
    }
}
