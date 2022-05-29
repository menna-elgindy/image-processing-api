import fs from "fs";

//check image existence at specific path
const imageExist = (path: string): boolean => {
  return fs.existsSync(path);
};

export default imageExist;
