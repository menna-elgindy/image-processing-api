import express from "express";
import routes from "./routes/routes";

const app = express();
const port = 3000;

//main endpoint
app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("Welcome to image processing api");
});

// use endpoint :'/image'
app.use("/image", routes);

//check that server is started
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
