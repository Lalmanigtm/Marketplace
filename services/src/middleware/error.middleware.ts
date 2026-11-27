import { ErrorRequestHandler } from "express";
import { ApiError } from "../utils/api-error.js"
import { ApiResponse } from "../types/common.types.js";

export const errorHandler: ErrorRequestHandler = (
    error: unknown, 
    _request,
    response,
    next,
) => {
    const statusCode = error instanceof ApiError ? error?.statusCode : 500;
    const message = error instanceof Error? error.message : "An unexpected error occured.";

    response.status(statusCode).json({
      success: false,
      message,
    } satisfies ApiResponse<never>)
}