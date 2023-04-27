import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const PORT: number = 8080;
const API_KEY: string = ''

// TODO: Expand to a separate service.