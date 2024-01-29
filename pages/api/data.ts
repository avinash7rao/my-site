import { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/info.json";

const getData = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.status(200).json(data);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getData;
