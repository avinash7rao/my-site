import { NextApiRequest, NextApiResponse } from "next";
import infoData from "../../data/info.json";
import socialLinksData from "../../data/socialLinks.json";

const getAllData = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.status(200).json({
      info: infoData,
      socialLinks: socialLinksData,
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getAllData;
