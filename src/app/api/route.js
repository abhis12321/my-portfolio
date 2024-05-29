import { NextResponse } from "next/server";

export async function POST(req , res) {
    try {
        let data = await req.json();
        console.log(data);
        return NextResponse.json({success:true , message:"data recieved in backend API"});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}