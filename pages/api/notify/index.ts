import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
  const token = <string>process.env.TWILIO_AUTH_TOKEN;
  const phonenumber = <string>process.env.TWILIO_PHONE_NUMBER;

  
  const client = twilio(accountSid, token);
  const { phone, description, name, email } = req.body;
  // console.log(phone, message);
  client.messages
    .create({
      body: name + "    " + description + "    " + email  + "    " + phone,
      from: "+18592955834",
      to: "+19176782017",
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {

      res.json({
        success: false,
      });
    });
}