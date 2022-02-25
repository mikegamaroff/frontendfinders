// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"
/* type Data = {
  name: string
}
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse /* <Data> */
) {

  if (req.method === "GET") {
    const users = await prisma.submissions.findMany();
    return res.send(users);
  } else if (req.method === "POST") {
    const { body: data } = req;
    const newSubmission = await prisma.submissions.create({data} );
    return res.status(201).send(newSubmission);
  }
}
