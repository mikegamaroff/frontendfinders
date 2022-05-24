



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"
/*  type Data = {
  submissionID: number
} */

export default async function handler(
  req: NextApiRequest/* <Data> */,
  res: NextApiResponse
) {

    const { body: data } = req;
    const steps = await prisma.steps.findMany({ where: {
      submissionID: data.id
    }});

  /*   const steps = await prisma.steps.findMany(); */
/*   const items = await prisma.items.findMany();  */
/*     const items = await prisma.steps.deleteMany();  */
    return res.send(steps);

}

