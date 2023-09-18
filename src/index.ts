import express, { Request, Response, Application } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 8000;


function sum(a: number, b: number): number {
    return a + b;
}

app.get("/", (req: Request, res: Response): void => {
    console.log(sum(9, 1));
    res.send("Hello Typescript with Node.js!d")
});

app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});


