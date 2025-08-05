// challenges/day-005/ts-zod-exercises/index.ts
// This file contains exercises for learning Zod schema validation in TypeScript.

import { z, ZodError } from 'zod';

function log(...args: unknown[]) {
    console.log(...args);
}
function logH1(message: string) {
    console.log(`\n===== ${message} =====\n`);
}
function logH2(message: string) {
    console.log(`=== ${message} ===`);
}
function logH3(message: string) {
    console.log(`--- ${message} ---`);
}
function obj2str(obj: unknown): string {
    return JSON.stringify(obj, null, 2);
}

const numberOfExercise = process.argv[2] ? parseInt(process.argv[2]) : 0;
const runExercise: boolean[] = Array(8).fill(true);
if (numberOfExercise) {
    runExercise.fill(false, 0, 8);
    runExercise[numberOfExercise] = true;
}

// Exercise 1: Basic Object Schema
(function (run) {
    if (!run) return;
    logH1("Exercise 1: Basic Object Schema");

    const UserSchema = z.object({
        id: z.number(),
        name: z.string(),
        email: z.string(),
        isAdmin: z.boolean()
    })

    const validObject = {
        id: 1,
        name: "Darth Vader",
        email: "darth@empire.com",
        isAdmin: true
    }
    const invalidObject = {
        id: "2",
        name: "Luke Skywalker",
        email: "luke@rebellion.com",
        isAdmin: "false"
    }

    function validate(user: unknown) {
        log('[<] Input object:', obj2str(user))

        const parsed = UserSchema.safeParse(user)
        if (parsed.success) {
            log(`[+] Valid user: ${obj2str(parsed.data)}`)
        } else {
            log(`[-] Validation errors:`)
            log(
                parsed.error.issues.map((issue) => ` - '${issue.path}': ${issue.message}`
                ).join('\n')
            )
        }
    }

    logH2("Validate objects");
    logH3("Validation a valid object")
    validate(validObject)
    logH3("Validation an invalid object")
    validate(invalidObject);

    logH2("Infer type and validate typed objects");

    type User = z.infer<typeof UserSchema>

    const r2d2: User = {
        id: 3,
        name: 'R2D2',
        email: 'r2d2@droids.com',
        isAdmin: false
    }
    const c3po: User = {
        id: 4,
        name: 'C3PO',
        email: 'c3po@droids.com',
        isAdmin: false
    }
    validate(r2d2)
    validate(c3po)
})(runExercise[1]);

// Exercise 2: Optional and Default Fields
(function (run) {
    if (!run) return;
    logH1("Exercise 2: Optional and Default Fields");

    const UserSchema = z.object({
        id: z.number(),
        name: z.string(),
        email: z.string(),
        isAdmin: z.boolean().optional().default(false),
        bio: z.string().optional()
    })

    const darthVader = {
        id: 1,
        name: "Darth Vader",
        email: "darth@empire.com",
    }
    const lukeSkywalker = {
        id: 2,
        name: "Luke Skywalker",
        email: "luke@rebellion.com",
        isAdmin: false,
        bio: "Jedi Knight and hero of the Rebellion"
    }

    function validate(user: unknown) {
        log('[<] Input object:', obj2str(user))

        const parsed = UserSchema.safeParse(user)
        if (parsed.success) {
            log(`[+] Valid user: ${obj2str(parsed.data)}`)
        } else {
            log(`[-] Validation errors:`)
            log(
                parsed.error.issues.map((issue) => ` - '${issue.path}': ${issue.message}`
                ).join('\n')
            )
        }
    }

    logH2("Validate objects");
    logH3("Validation an object without 'isAdmin and 'bio' fields")
    validate(darthVader)
    logH3("Validation an object with 'isAdmin and 'bio' fields")
    validate(lukeSkywalker);

    logH2("Infer type and validate typed objects");

    // Although isAdmin is optional in the schema, it is required in the inferred type because .default() makes it required.
    type Exercise2User = z.infer<typeof UserSchema>

    const r2d2: Exercise2User = {
        id: 3,
        name: 'R2D2',
        email: 'r2d2@droids.com',
        isAdmin: false
    }
    const c3po: Exercise2User = {
        id: 4,
        name: 'C3PO',
        email: 'c3po@droids.com',
        isAdmin: false
    }
    validate(r2d2)
    validate(c3po)
})(runExercise[2]);

// Exercise 3: Array of Objects
(function (run) {
    if (!run) return;
    logH1("Exercise 3: Array of Objects");

    const UserSchema = z.array(z.object({
        id: z.number(),
        name: z.string(),
        email: z.string(),
        isAdmin: z.boolean().optional().default(false),
        bio: z.string().optional()
    }))

    const data = [
        { id: 1, name: "Alice", email: "a@a.com", isAdmin: true },
        { id: 2, name: "Bob", email: "b@b.com" },
        { id: 3, name: "Invalid", email: 123 },
    ];

    function validate(user: unknown) {
        log('[<] Input object:', obj2str(user))

        const parsed = UserSchema.safeParse(user)
        if (parsed.success) {
            log(`[+] Valid user: ${obj2str(parsed.data)}`)
        } else {
            log(`Error messages in custom format:`)
            for (const error of parsed.error.issues) {
                log(`Error at ${String(error.path[0])} item in '${String(error.path[1])}' field: ${error.message}`);
            }
            log(`Error messages using z.issues:`);
            log(parsed.error.issues)
            log(`Error messages using z.treeifyError:`);
            log(`[-] Validation error ${obj2str(z.treeifyError(parsed.error))}`)
        }
    }

    logH2("Validate array of users");
    validate(data);

})(runExercise[3]);

// Exercise 4: Literal and Enums
(function (run) {
    if (!run) return;
    logH1("Exercise 4: Literal and Enums");

    const CategorySchema = z.literal(['clothing', 'books', 'electronics']);

    const ProductSchema = z.object({
        name: z.string(),
        price: z.number(),
        category: CategorySchema
    })

    const validProduct = { name: "Shirt", price: 29.99, category: "clothing" }
    const invalidProduct = { name: "Milk", price: 1.99, category: "food" }

    function validate(product: unknown) {
        log('[<] Input object:', obj2str(product))

        const parsed = ProductSchema.safeParse(product)
        if (parsed.success) {
            log(`[+] Valid product: ${obj2str(parsed.data)}`)
        } else {
            log(`[-] Validation errors:`)
            log(
                parsed.error.issues.map((issue) => ` - '${issue.path}': ${issue.message}`
                ).join('\n')
            )
        }
    }

    logH2("Validate products");
    validate(validProduct)
    validate(invalidProduct)

})(runExercise[4]);

// Exercise 5: Transformation
(function (run) {
    if (!run) return;
    logH1("Exercise 5: Transformation");
    // Goal: Convert input string to uppercase
    // Tasks:
    // - Create a schema that accepts a name: string
    // - Use .transform() to convert it to uppercase
    // - Validate: { name: "john doe" } → Output should be "JOHN DOE"

    const UserSchema = z.object({
        name: z.string().transform(value => value.toUpperCase())
    })

    const user1 = { name: "john doe" }
    const user2 = { name: "Darth Vader" }
    const user3 = { name: "Luke Skywalker" }

    function validate(user: unknown) {
        log('[<] Input object:', obj2str(user))

        const parsed = UserSchema.safeParse(user)
        if (parsed.success) {
            log(`[+] Valid user: ${obj2str(parsed.data)}`)
        } else {
            log(`[-] Validation errors:`)
            log(
                parsed.error.issues.map((issue) => ` - '${issue.path}': ${issue.message}`
                ).join('\n')
            )
        }
    }

    logH2("Validate and transform users");
    validate(user1)
    validate(user2)
    validate(user3)

})(runExercise[5]);

// Exercise 6: Refinement and Custom Errors
(function (run) {
    if (!run) return;
    logH1("Exercise 6: Refinement and Custom Errors");
    // Goal: Validate password strength
    // Tasks:
    // - Create a UserSchema with password: string
    // - Use .refine() to enforce:
    //   - at least 8 characters
    //   - contains a number
    //   - contains a capital letter
    // - Show error messages if validation fails

    const UserSchema = z.object({
        name: z.string(),
        password: z.string()
            .refine(v => v.length >= 8, 'Password must be at least 8 characters')
            .refine(v => /[0-9]/.test(v), 'Password must contain at least one number')
            .refine(v => /[A-Z]/.test(v), 'Password must contain at least one capital letter')
    })

    const validObject = {
        name: "Darth Vader",
        password: "Darth1234",
    }
    const invalidObject = {
        name: "Luke Skywalker",
        password: "luke",
    }

    function validate(user: unknown) {
        log('[<] Input object:', obj2str(user))

        const parsed = UserSchema.safeParse(user)
        if (parsed.success) {
            log(`[+] Valid user: ${obj2str(parsed.data)}`)
        } else {
            log(`[-] Validation errors:`)
            log(
                parsed.error.issues.map((issue) => ` - '${issue.path}': ${issue.message}`
                ).join('\n')
            )
        }
    }

    logH2("Validate users with password strength");
    validate(validObject)
    validate(invalidObject)

})(runExercise[6]);

// Exercise 7: Schema + Axios
(async function (run) {
    if (!run) return;
    logH1("Exercise 7: Schema + Axios");
    // Goal: Fetch and validate data from an API
    // Tasks:
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    // - Create a Zod schema to validate the response
    // - Use safeParse() to validate the response before using it
    // - Catch and log validation errors

    const ToDoSchema = z.object({
        userId: z.number(),
        id: z.number(),
        title: z.string(),
        completed: z.boolean()
    })

    class ValidationError extends Error {
        constructor(message: string, public zodError: ZodError) {
            super(message)
        }
    }

    async function fetchAndValidateTodo(url: string, simulateInvalidData = false) {
        try {
            const r = await fetch(url);
            if (!r.ok)
                throw new Error(`Response status: ${r.status}`);
            const d = await r.json();
            log('[<] Received object:', obj2str(d));
            if (simulateInvalidData) {
                delete d.userId;
                log('[<] Simulate a missing field for testing:', obj2str(d));
            }
            const parsed = ToDoSchema.safeParse(d);
            if (parsed.success) {
                log('[+] Valid object:', obj2str(parsed.data));
            } else {
                throw new ValidationError('Validation failed', parsed.error);
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                log('[-] Validation error:');
                error.zodError.issues.forEach(issue => {
                    log(` - Path: ${issue.path.join('.')}, Message: ${issue.message}`);
                });
            } else if (error instanceof Error) {
                log('[-] Error fetching:');
                log(error.message);
            } else {
                log('[-] Unknown error:');
                log(error);
            }
        }
    }

    logH2("Fetch and validate a ToDo item");
    logH3("Valid ToDo item");
    await fetchAndValidateTodo(url);
    logH3("Invalid url (simulated)");
    await fetchAndValidateTodo('url', true);
    logH3("Invalid ToDo item (simulated)");
    await fetchAndValidateTodo(url, true);

})(runExercise[7]);
