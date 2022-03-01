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

    const submissions = await prisma.submissions.findMany();
    const steps = await prisma.steps.findMany();
/*   const items = await prisma.items.findMany();  */
/*     const items = await prisma.steps.deleteMany();  */
    return res.send({steps});

  } else if (req.method === "POST") {
    const { body: data } = req;
    const newSubmission = await prisma.submissions.create({data} );
    return res.status(201).send(newSubmission);
  }
}
