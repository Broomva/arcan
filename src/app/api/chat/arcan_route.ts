import { StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

import { auth } from '@/app/auth/auth'
import { nanoid } from '@/lib/utils'

export const runtime = 'edge'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
    const json = await req.json()
    const { messages, previewToken } = json
    const userId = (await auth())?.user.id

    if (!userId) {
        return new Response('Unauthorized', {
            status: 401
        })
    }

    if (previewToken) {
        configuration.apiKey = previewToken
    }

    const query = messages.map((message:any) => message.content).join(' ')
    const url = `https://arcan-chat.arcanai.tech?query=${query}`
    const headers = {
        Authorization: `Bearer`
    }

    const res = await fetch(url, { headers })?.then((res) => res.json())

    // Check for a valid response
    if (!res.ok) {
        return new Response('Failed to fetch', { status: res.status })
    }
    else {
        // const text = await res.text();
        const title = json.messages[0].content.substring(0, 100)
        const id = json.id ?? nanoid()
        const createdAt = Date.now()
        const path = `/spells_studio/chat/${id}`

        return new StreamingTextResponse(res.body, {
            headers: {
                'Content-Type': 'text/event-stream'
            }
        })
    }
}