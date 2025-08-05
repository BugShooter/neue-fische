# Zod Exercises

There are a series of exercises to practice using Zod for schema validation in TypeScript which were completed as part of Advanced Web Development training.

## Table of Contents

- [Exercise 1: Basic Object Schema](#exercise-1-basic-object-schema)
- [Exercise 2: Optional and Default Fields](#exercise-2-optional-and-default-fields)
- [Exercise 3: Array of Objects](#exercise-3-array-of-objects)
- [Exercise 4: Literal and Enums](#exercise-4-literal-and-enums)
- [Exercise 5: Transformation](#exercise-5-transformation)
- [Exercise 6: Refinement and Custom Errors](#exercise-6-refinement-and-custom-errors)
- [Exercise 7: Schema + Axios](#exercise-7-schema--axios)

## How to Use

1. Clone the repository.
2. Navigate to the `ts-zod-exercises` directory.
3. Install dependencies with `npm install`.
4. Run the exercises using `npm start` or `npm start <number of exercise>`.

## Exercise 1: Basic Object Schema

### Goal: Create a schema for a User object with the following structure:

```typescript
{
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}
```

### Tasks:

- Create a Zod schema for this object
- Use safeParse() to validate valid and invalid objects
- Infer the TypeScript type using z.infer

## Exercise 2: Optional and Default Fields
### Goal: Add the following changes to your User schema:

- isAdmin should be optional and default to false
- Add an optional bio?: string field

### Tasks:

- Modify the schema
- Validate a user object that doesn’t provide isAdmin or bio
- Print the parsed result to verify the default value

## Exercise 3: Array of Objects

### Goal: Validate an array of users

```typescript
const data = [
  { id: 1, name: "Alice", email: "a@a.com", isAdmin: true },
  { id: 2, name: "Bob", email: "b@b.com" },
  { id: 3, name: "Invalid", email: 123 },
];
```

### Tasks:

- Create a schema for a list of users
- Validate the array and print detailed error messages for the failed entry

## Exercise 4: Literal and Enums

### Goal: Validate product category

type Category = "clothing" | "books" | "electronics";

### Tasks:

- Use z.literal() to create a CategorySchema
- Create a ProductSchema that includes:
  - name: string
  - price: number
  - category: Category
- Validate this input:
  `{ name: "Shirt", price: 29.99, category: "clothing" }`
- Try with an invalid category: "food"

## Exercise 5: Transformation

### Goal: Convert input string to uppercase

### Tasks:

- Create a schema that accepts a name: string
- Use .transform() to convert it to uppercase
- Validate: { name: "john doe" } → Output should be "JOHN DOE"

## Exercise 6: Refinement and Custom Errors

### Goal: Validate password strength

### Tasks:

- Create a UserSchema with password: string
- Use .refine() to enforce:
  - at least 8 characters
  - contains a number
  - contains a capital letter
- Show error messages if validation fails

## Exercise 7: Schema + Axios

### Goal: Fetch and validate data from an API

### Tasks:

- Fetch a TODO from https://jsonplaceholder.typicode.com/todos/1
- Create a Zod schema to validate the response
- Use safeParse() to validate the response before using it
- Catch and log validation errors