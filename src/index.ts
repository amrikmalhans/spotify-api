import express, { Application, json } from "express";
import cors from "cors";
import { router } from "./routes";

const app: Application = express();

app.use(json());
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app };
