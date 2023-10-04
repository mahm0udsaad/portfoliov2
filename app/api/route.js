 
export async function POST(Request) {
    const { name } = Request.body ;
    return Response.json({ name })
  }


//   const transporter = nodemailer.createTransport({
//     service: 'gmail', 
//     auth: {
//       user: 'saad123mn123@gmail.com', 
//       pass: process.env.GPASS,
//       clientSecret:process.env.clientSecret
//     }
//   });
//   const mailOptions = {
//     from: email,  
//     to: 'saad123mn123@gmail.com',    
//     subject: `${name} message you from portfolio`,
//     text: message
//   };
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error:', error);
//     } else {
//       console.log('Email sent succesfully:', info.response);
//     }
//   });