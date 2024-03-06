<!-- App.svelte -->
<script>
    import { FirebaseApp, User, Collection } from "svelte-fire";
    import "firebase/firestore";

    let app = null;
    let user = null;
    let todos = null;

    const firebaseConfig = {
        // Add your Firebase project configuration here
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        // ...
    };

    function addTodo() {
        if (newTodo) {
            todos.add({ text: newTodo, completed: false });
            newTodo = "";
        }
    }

    function toggleTodo(event) {
        const { id, completed } = event.detail;
        todos.doc(id).update({ completed: !completed });
    }

    let newTodo = "";
</script>

<FirebaseApp {firebaseConfig} bind:this={app}>
    <User bind:this={user} let:user>
        {#if user}
            <h1>Welcome, {user.email}!</h1>
            <Collection path={"todos"} let:data={todos} bind:this={todos}>
                <ul>
                    {#each todos as todo (todo.id)}
                        <li>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                on:change={() => toggleTodo({ detail: todo })}
                            />
                            <span class:completed={todo.completed}
                                >{todo.text}</span
                            >
                        </li>
                    {/each}
                </ul>
                <form on:submit|preventDefault={addTodo}>
                    <input
                        type="text"
                        bind:value={newTodo}
                        placeholder="Add a new todo"
                    />
                    <button type="submit">Add</button>
                </form>
            </Collection>
        {:else}
            <h1>Please sign in to view your todos.</h1>
            <button on:click={() => user.login()}>Sign In with Google</button>
        {/if}
    </User>
</FirebaseApp>

<style>
    .completed {
        text-decoration: line-through;
    }
</style>
