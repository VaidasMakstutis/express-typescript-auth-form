import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession( { keys: ["asdfdfd"] }));
app.use(router);

app.listen(port, () => {
    console.log(`Your server is working on: localhost:${port}`);
});