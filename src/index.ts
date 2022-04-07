import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

app.get("/", (req: Request, res: Response) => {
    res.send("Hi there!");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});