import express from "express";
import validator from "./middleware/validateImageParams";
import sharpImage from "./utilities/sharpImageResize";
import path from "path";
import imageExist from "./utilities/imageExistence";

const routes = express.Router();

//get endpoint:'/image'
//validate query parameters then send the resized image to browser
routes.get(
  "/",
  validator,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const imageId = req.query.imageId as string; //name of the desired image to be resized
    const width = req.query.width as string; // desired width
    const height = req.query.height as string; //desired height
    const resizedImagesPath: string = path.resolve(
      __dirname,
      `../../images/resized/${imageId}-${width}x${height}.jpg`
    ); //path for the resized images

    // helper function for sending image to browser
    function sendImage(): void {
      res.sendFile(resizedImagesPath);
    }

    let f = false; //helper flag

    //send image to browser if it was resized before
    if (imageExist(resizedImagesPath) == true) {
      sendImage();
    }

    // resize image if it was not resized yet
    if (imageExist(resizedImagesPath) == false) {
      f = await sharpImage({ imageId, width, height });
    }

    // send new resized image to browser
    if (f) {
      setTimeout(sendImage, 500);
    }
  }
);

export default routes;
