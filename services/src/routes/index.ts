import { Router } from "express";
import { ApiResponse } from "../types/common.types.js";
import { SERVICE_NAME } from "../config/constants.js";

export const apiRouter = Router();

apiRouter.get("/health", (_request, response)  => {
    const body: ApiResponse<{
        service: string;
        status: "healthy",
        timestamps: string;
    }> = {
        success: true,
        message: "Service is healthy",
        data: {
            service: SERVICE_NAME,
            status: "healthy",
            timestamps: new Date().toISOString(),
        },
    };

    response.status(200).json(body);
});