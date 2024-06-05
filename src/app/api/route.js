import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req , res) {
    try {
        let data = await req.json();
        console.log(data);
        sendVerificationEmail(data.name , data.email , data.message);
        return NextResponse.json({success:true , message:"data recieved in backend API"});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.E_PASS,
  },
});

async function sendVerificationEmail(name , email, message) {
  const mailOptions = {
    from: process.env.USER,
    to: process.env.USER2,
    subject: "Contacting through Portfolio",
    text: `Name : ${name}`,
    html: `<p>Hi,</p>
           <p>${message}</p>`,
  };

  return transporter.sendMail(mailOptions);
}