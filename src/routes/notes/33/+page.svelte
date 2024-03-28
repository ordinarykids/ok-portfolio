<script>
    import { onMount } from "svelte";
    import { OpenAI } from "@langchain/openai";
    import { ConversationChain } from "langchain/chains";
    import { ConversationBufferMemory } from "langchain/memory";
    import { PromptTemplate } from "@langchain/core/prompts";
    import { env } from "$env/dynamic/public";

    let openaiApiKey = env.OPENAI_API_KEY;
    let llm;
    let memory;
    let conversation;
    let userInputTemplate;
    let conversationHistory = [];

    onMount(async () => {
        llm = new OpenAI({ temperature: 0.7, openaiApiKey });
        memory = new ConversationBufferMemory();
        conversation = new ConversationChain({ llm, memory });
        userInputTemplate = new PromptTemplate({
            inputVariables: ["history"],
            template:
                "Based on the conversation history:\n{history}\nGenerate a user input: ",
        });

        startConversation();
    });

    async function startConversation() {
        while (true) {
            const userInput = await llm.call(
                userInputTemplate.format({ history: memory.buffer }),
            );

            conversationHistory = [...conversationHistory, { user: userInput }];

            const response = await conversation.predict({ input: userInput });

            conversationHistory = [
                ...conversationHistory,
                { assistant: response },
            ];
        }
    }
</script>

<main>
    <h1>Conversation with OpenAI</h1>
    <div class="conversation">
        {#each conversationHistory as message}
            <div class="message">
                {#if message.user}
                    <strong>User:</strong> {message.user}
                {:else if message.assistant}
                    <strong>Assistant:</strong> {message.assistant}
                {/if}
            </div>
        {/each}
    </div>
</main>

<style>
    .conversation {
        margin-top: 20px;
    }

    .message {
        margin-bottom: 10px;
    }
</style>
