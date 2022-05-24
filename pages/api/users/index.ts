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

    const getUsers = await prisma.submissions.findMany()
     
  /*     const getItems = await prisma.items.findMany(); */

    return res.status(200).json(getUsers)

}


