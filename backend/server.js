import express from "express";
import "dotenv/config";
import cors from "cors";
import errorMiddleware from "./middleware/error.middleware.js";
import indexRoute from "./routes/index.routes.js";
import authRoute from "./routes/auth.routes.js";
import reportsRoute from "./routes/reports.routes.js";
import adminRoute from "./routes/admin.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/reports", reportsRoute);
app.use("/admin", adminRoute);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
