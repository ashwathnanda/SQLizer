import express, {Application, Request, Response} from "express";
import cors from "cors";
import {Configuration, OpenAIApi} from "openai";

const PORT: number = 8080;
const API_KEY: string = ''

const app: Application = express()
app.use(cors)
app.use(express.json())


const configuration = new Configuration({
    apiKey: API_KEY
})

const openai = new OpenAIApi(configuration)

app.post("/completions", async (req: Request, res: Response) => {
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [
                {
                    role: "user",
                    content: "Create a SQL Request to " + req.body.message
                }]
        })
        res.send(completion.data.choices[0].message)

    } catch (error) {
        res.status(500).send("Server Error")
    }
})

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})