import express from "express";
require("dotenv").config();

const app = express();
import cors from "cors";
import finalErrorHandler from "./ERRORS/finalErrorHandler";
import { BACKEND_ENDPOINTS, FRONTEND_URL } from "./constants";

/*---------------------------------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: FRONTEND_URL }));

/*----------------------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Port :" + PORT);
});

/* ------------PERN ROUTES----------------- */
const pernRoutes = require("./routes/pern");
app.use(BACKEND_ENDPOINTS.ROOT_PERN, pernRoutes);

app.use(finalErrorHandler);
