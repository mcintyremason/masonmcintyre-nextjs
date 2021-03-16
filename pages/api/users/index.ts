import { NextApiRequest, NextApiResponse } from "next";

// example nextjs api call handler
// not being used
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const sampleUserData = {};

  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(sampleUserData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
