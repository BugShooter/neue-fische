// TypeScript Networking Exercises: fetch & axios

// import axios from "axios";
// Import axios for node.js and browser
let axios: typeof import('axios').default;

async function getAxios() {
    if (typeof window !== 'undefined' && (window as any).axios) {
        return (window as any).axios;
    }

    try {
        const axiosModule = await import('axios');
        return axiosModule.default;
    } catch (error) {
        throw new Error('Axios is not available');
    }
}

function log(...args: any) {
    if (console.log) console.log(...args);
}

// Part 1: Using fetch with TypeScript

// Exercise 1: Fetch & Log Posts

interface Post {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

async function exercise1() {
    log("Exercise 1: Fetch & Log Posts");
    async function fetchPosts(): Promise<Post[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok)
            throw new Error("Failed to fetch posts");
        const posts: Post[] = await response.json();
        return posts;
    }
    await fetchPosts()
        .then((posts) => {
            log("Exercise 1:", posts[0]?.title, "\n")
        })
        .catch(error => {
            log("Exercise 1:", error.message, "\n");
        });

}

// Exercise 2: Display Posts in the DOM

async function exercise2() {
    log("Exercise 2: Display Posts in the DOM");
    async function fetchPosts(): Promise<Post[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok)
            throw new Error("Failed to fetch posts");
        const posts: Post[] = await response.json();
        return posts;
    }
    await fetchPosts()
        .then((posts) => {
            if (typeof window !== 'undefined') {
                const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
                let ul = document.getElementById('postList')
                if (!ul) {
                    ul = document.createElement('ul');
                    ul.id = "postList";
                    const h2 = document.createElement('h2');
                    h2.textContent = "Exercise 2: Display Posts in the DOM";
                    body.appendChild(h2);
                    body.appendChild(ul);
                }
                posts.forEach(post => {
                    const li: HTMLLIElement = document.createElement('li');
                    li.textContent = post.title;
                    ul.appendChild(li);
                });

            } else {
                posts.slice(0, 5).forEach(post => log(post.title));
            }
        })
        .catch(error => {
            log("Exercise 2:", error.message);
        });
    log();
}

// Exercise 3: Handle Errors Gracefully

async function exercise3() {
    log("Exercise 3: Handle Errors Gracefully");
    async function fetchPosts(): Promise<Post[]> {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts-fail');
            if (!response.ok)
                throw new Error(`Failed to fetch posts: ${response.status}`);
            const posts: Post[] = await response.json();
            return posts;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`fetchPosts: ${error.message}`);
            }
            throw new Error("An unknown error occurred while fetching posts");
        }
    }
    await fetchPosts()
        .then((posts) => {
            log("Exercise 3:", posts[0]?.title, "\n")
        })
        .catch(error => {
            if (typeof window !== 'undefined') {
                const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
                let errorMsg = document.getElementById('errorMsg');
                if (!errorMsg) {
                    errorMsg = document.createElement('p');
                    errorMsg.id = 'errorMsg';
                    body.appendChild(errorMsg);
                }
                errorMsg.textContent = error.message;
            } else {
                log("Exercise 3:", error.message, "\n");
            }
        });
}


// Exercise 4: Create a New Post with POST Request
// Goal: Send data using fetch.
// Task:
// [x] Define NewPost and Post interfaces
// [x] Create a form with fields: title, body, userId
// POST to https://jsonplaceholder.typicode.com/posts
// Log or render the created id
interface NewPost {
    userId: number;
    title: string;
    body: string;
}
async function exercise4() {
    log("Exercise 4: Create a New Post with POST Request");

    async function createPost(data: NewPost): Promise<Post> {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const post: Post = await result.json();
        // TODO: validation

        return post;
    }

    if (typeof window !== 'undefined') {
        const form = document.getElementById('postForm') as HTMLFormElement;
        form.addEventListener('submit', async (event: Event) => {
            event.preventDefault();
            const formData = new FormData(form);
            // Object.fromEntries([...formData]);
            const newPost: NewPost = {
                userId: Number(formData.get('userId')),
                title: String(formData.get('title')),
                body: String(formData.get('body'))
            }
            if (newPost.userId && newPost.title && newPost.body) {
                const post: Post = await createPost(newPost);
                log("Exercise 4: PostID:", post.id);
            }
        });
    }
}


// Part 2: Using axios with TypeScript

// Exercise 5: Install & Import Axios (a simple GET request)
async function exercise5() {
    log("Exercise 5: Install & Import Axios (a simple GET request)");
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    log(result.data[0]);
}


// Exercise 6: Use Axios to Get Users
// Render names in a list
interface User {
    id: number;
    name: string;
}
async function exercise6() {
    log("Exercise 6: Use Axios to Get Users");
    async function getUsers(): Promise<User[]> {

        const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        const users: User[] = response.data;
        return users;
    }
    const users: User[] = await getUsers();
    if (typeof window !== "undefined") {
        const ul = document.getElementById("exercise6") as HTMLUListElement;
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.id}: ${user.name}`;
            ul.appendChild(li);
        })
    }
    users.forEach(user => {
        log(`${user.id}: ${user.name}`);
    })

}

// Exercise 7: Create a New User(Fake)
interface NewUser {
    name: string;
}

async function exercise7() {
    log("Exercise 7: Create a New User(Fake)");
    async function createUser(newUser: NewUser): Promise<User> {
        const response = await axios.post<User>("https://jsonplaceholder.typicode.com/users");
        // TODO: check a response status 
        const user: User = response.data;
        // TODO: validation
        return user;
    }
    const user = await createUser({ name: "Terry Pratchett" });
    log(user);
}

// Exercise 8: Build a Small UI for API Interaction
// Goal: Combine input + POST + GET.
// Task:
// Create a form to enter post data
// Use axios.post to send the post
// Use axios.get to refresh and show the full list of posts
async function exercise8() {
    log("Exercise 8: Build a Small UI for API Interaction");
    if (typeof window === "undefined") {
        log("Exercise 8: applicable only for browser");
        return;
    }

    async function createPost(newPost: NewPost): Promise<Post> {
        const response = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts');
        // TODO: check a response status
        const post: Post = response.data;
        // TODO: validate a schema
        return post;
    }

    async function getPosts(): Promise<Post[]> {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        // TODO: check a response status
        const posts: Post[] = response.data;
        // TODO: validate a schema
        return posts;
    }

    async function showPosts(posts: Post[]): Promise<void> {
        const ul = document.getElementById("exercise8-posts") as HTMLUListElement;
        ul.innerHTML = '';
        posts.forEach(post => {
            const li = document.createElement('li');
            const text = `${post.id}: ${post.title} (by ${post.userId})`
            li.textContent = text;
            ul.appendChild(li);
            log(text);
        })
    }

    const form = document.getElementById("exercise8-post-form") as HTMLFormElement;
    form.addEventListener('submit', async (event: Event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const newPost: NewPost = {
            userId: Number(formData.get('userId')),
            title: String(formData.get('title')),
            body: String(formData.get('body'))
        }
        try {
            const post = await createPost(newPost);
            form.reset();
            // Refresh
            const posts = await getPosts();
            await showPosts(posts);
        } catch (error) {
            if (error instanceof Error) log(error.message);
        }
    })
    const refreshButton = document.getElementById("exercise8-refresh-button") as HTMLButtonElement;
    refreshButton.addEventListener('click', async (event: Event) => {
        log("Refresh posts");
        // Refresh
        const posts = await getPosts();
        await showPosts(posts);
    })


}

// Bonus Challenge: Fetch vs Axios Swap
// Goal: Understand the difference in syntax and features.
// Task:
// Take any one of your fetch solutions
// Convert it to use axios
// Compare how you handle:
// JSON parsing
// Error detection
// Type annotations

async function bonusExerciese() {
    log("Bonus Exercise: Handle Errors Gracefully (axios)");
    async function fetchPosts(): Promise<Post[]> {
        try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts-fail');
            const posts: Post[] = response.data;
            return posts;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                log('fetchPosts: Axios error:', error.response?.data);
            }
            if (error instanceof Error) {
                throw new Error(`fetchPosts: ${error.message}`);
            }
            throw new Error("fetchPosts: An unknown error occurred while fetching posts");
        }
    }
    await fetchPosts()
        .then((posts) => {
            log("Bonus Exercise:", posts[0]?.title, "\n")
        })
        .catch(error => {
            if (typeof window !== 'undefined') {
                const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
                let errorMsg = document.getElementById('bonus-errorMsg');
                if (!errorMsg) {
                    errorMsg = document.createElement('p');
                    errorMsg.id = 'errorMsg';
                    body.appendChild(errorMsg);
                }
                errorMsg.textContent = error.message;
            } else {
                log("Bonus Exercise:", error.message, "\n");
            }
        });
}

// Sequential execution of exercises
(async function main() {
    await exercise1();
    await exercise2();
    await exercise3();
    await exercise4();
    axios = await getAxios();
    await exercise5();
    await exercise6();
    await exercise7();
    await exercise8();
    await bonusExerciese();
})();
