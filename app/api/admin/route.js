import { MongoClient } from "mongodb";
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from "next/server";


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

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const clientData = {
        image:buffer,
        name,
        link,
        brief,
        description
    }

    try {
        const client = new MongoClient(process.env.DB_URL);
        await client.connect();

        const portfolio = client.db('portfolio');
        const work = portfolio.collection('latest_work');

        if(clientData){
            const insertionResult = await work.insertOne(clientData);
            console.log('Insertion Result:', insertionResult);
            
            console.log(name +" "+ " Inserted Successfully");
            return Response.json({ insertionResult });
        }
    } catch (err) {
        console.log(err);
    }
}
