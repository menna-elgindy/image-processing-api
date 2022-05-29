import { Request, Response, NextFunction } from "express";
import path from "path";
import imageExist from "../utilities/imageExistence";

// vaildate query parameters
const validateParams = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const imageId = req.query.imageId as string; //name of the desired image to be resized
  const width = req.query.width as unknown as number; // desired width
  const height = req.query.height as unknown as number; //desired height
  const imagesPath: string = path.resolve(
    __dirname,
    `../../../images/original/${imageId}.jpg`
  ); //path for the available images

  //check imageId existence at query parameters
  if (!imageId) {
    return res.send("please select an image id");
  }

  //check that the query's imageId is availble
  if (imageExist(imagesPath) == false) {
    return res.send("image not found, please select a valid image id");
  }

  //check width existence at query parameters
  if (!width) {
    return res.send("please select the desired width");
  }

  //check that width is a positive number
  if (width <= 0) {
    return res.send("please select width>0");
  }
  //check that width is a number not charcter
  if (isNaN(width)) {
    return res.send("width must be a positive integer");
  }

  //check height existence at query parameters
  if (!height) {
    return res.send("please select the desired height");
  }

  //check that height is a number not charcter
  if (isNaN(height)) {
    return res.send("height must be a positive integer");
  }

  //check that height is a positive number
  if (height <= 0) {
    return res.send("please select height>0");
  }
  next();
};

export default validateParams;
