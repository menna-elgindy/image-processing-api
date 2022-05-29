import sharp from "sharp";
import path from "path";

//the parameters need to resize image
interface imageParams {
  imageId: string;
  width: string;
  height: string;
}
const sharpImage = async (params: imageParams): Promise<boolean> => {
  const originalImagesPath: string = path.resolve(
    __dirname,
    `../../../images/original/${params.imageId}.jpg`
  ); //path for availble images that can be resized
  const resizedImagesPath: string = path.resolve(
    __dirname,
    `../../../images/resized/${params.imageId}-${params.width}x${params.height}.jpg`
  ); //path for the resized images

  // using sharp for image resizing
  sharp(originalImagesPath)
    .resize(parseInt(params.width), parseInt(params.height))
    .toFile(resizedImagesPath);
  return true;
};

export default sharpImage;
