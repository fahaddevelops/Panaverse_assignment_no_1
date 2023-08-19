# Panaverse_assignment_no_1

# TypeScript Basics

Welcome to the TypeScript Basics repository! This guide is designed to help you understand the fundamental concepts of TypeScript, a powerful superset of JavaScript that brings static typing and other features to enhance code quality and maintainability.

## Table of Contents
- [Introduction](#introduction)
- [Variables](#variables)
- [Data Types](#data-types)
- [Operators](#operators)
- [Control Statements](#control-statements)
- [Getting Started](#getting-started)
- [Resources](#resources)
- [Contributing](#contributing)

## Introduction
TypeScript is a language that builds upon JavaScript by adding optional static types and other features. These features enable better code organization, improved error detection, and enhanced code readability. TypeScript code is then transpiled into JavaScript code that can run in any browser or Node.js environment.

## Variables
Variables in TypeScript are declared using the `var`, `let`, or `const` keywords.

- `var`: Declares variables with function or global scope.
- `let`: Introduces block-scoped variables that can be reassigned.
- `const`: Declares constants with block scope that cannot be reassigned.

Example:
```typescript
var globalVar = 10;
let localVar = 20;
const constantVar = 30;
```

## Data Types
TypeScript includes various data types, both primitive and user-defined.

- Primitive Data Types: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`
- User-defined Data Types: `arrays`, `objects`, `enums`

Example:
```typescript
let age: number = 25;
let name: string = "John";
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "gaming"];
```

## Operators
TypeScript supports standard arithmetic, assignment, comparison, and logical operators, similar to JavaScript.

- Arithmetic Operators: `+`, `-`, `*`, `/`, `%`
- Assignment Operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- Comparison Operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logical Operators: `&&`, `||`, `!`

## Control Statements
Control statements are used to make decisions and perform actions based on conditions.

- `if` Statements: Execute a block of code if a condition is true.
- `else` Statements: Execute a block of code if the `if` condition is false.
- Nested `if-else` Statements: Combine multiple conditions and actions.
- Template Literals: Allow embedding expressions within string literals.

Example:
```typescript
let age: number = 18;

if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor.');
}
```

## Getting Started
To run TypeScript code, follow these steps:

1. Install Node.js and npm.
2. Install TypeScript globally: `npm install -g typescript`
3. Create a TypeScript file (e.g., `main.ts`) with your code.
4. Compile TypeScript to JavaScript: `tsc main.ts`
5. Run the compiled JavaScript: `node main.js`

## Resources
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)

## Contributing
Contributions are welcome! Feel free to open issues and pull requests to improve this guide.

Feel free to explore and experiment with different TypeScript concepts covered in this guide. Happy coding and learning TypeScript!

