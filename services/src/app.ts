import  express  from "express";
import cors from "cors";
import { ApiResponse } from "./types/common.types.js";
import { API_PREFIX } from "./config/constants.js";
import { apiRouter } from "./routes/index.js";
import { notFoundHandler } from "./middleware/not-found.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

export const app = express();

app.disable("x-powered-by");
app.use(express.json({ limit: "2mb"}));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_request, response)  => {
    const body: ApiResponse<never> = {
        success: true,
        message: "Marketplace api is running.",
    };
    response.status(200).json(body);
});

app.use(API_PREFIX, apiRouter); // before making it work go and setup routes in index.ts of routes folder.
app.use(notFoundHandler); // same ways first setup not-found.middleware.ts and write and import this.
app.use(errorHandler); // same ways first setup error.middleware.ts and write and import this.