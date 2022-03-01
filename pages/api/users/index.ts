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

    const getUser = await prisma.submissions.findUnique({
        where: {
          id: 10,
        },include: {
         steps: true
        }
      })
      const getSteps = await prisma.steps.findMany({
        where: {
          submissionID: 10
        }
      });
  /*     const getItems = await prisma.items.findMany(); */
    return res.send({getSteps});

}


