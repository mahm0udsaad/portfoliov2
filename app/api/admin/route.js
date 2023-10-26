import { MongoClient } from "mongodb";
import multer from "multer";
import fs from 'fs';
import { join } from "path";
import { writeFile } from "fs/promises";

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
    
    
    try {
        const client = new MongoClient(process.env.DB_URL);
        await client.connect();
        
        const portfolio = client.db('portfolio');
        const work = portfolio.collection('latest_work');
        
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            
            const path = join('public',file.name )
            await writeFile(path,buffer)
            
            const clientData = {
                image:path,
                name,
                link,
                brief,
                description
            }
            if(clientData){
            console.log('clientData', clientData);
            const insertionResult = await work.insertOne(clientData);
            console.log('Insertion Result:', insertionResult);
            
            console.log(name +" "+ " Inserted Successfully");
            return Response.json({ insertionResult , clientData });
        }
    } catch (err) {
        console.log(err);
    }
}
