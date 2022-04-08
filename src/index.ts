import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession( { keys: ["asdfdfd"] }));
app.use(router);

app.get("/", (req: Request, res: Response) => {
    res.send("Hi there!");
})

app.listen(port, () => {
    console.log(`Your server is working on: localhost:${port}`);
});