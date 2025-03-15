# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# To-Do List Application

## Overview

This is a simple To-Do List application built using React. It allows users to add, delete, edit, and mark tasks as completed.

## Features

- Add new tasks
- Delete tasks
- Edit existing tasks
- Mark tasks as completed
- Uses functional components and state management

## Installation

### Prerequisites:

- Node.js and npm installed
- Vite installed (optional)

### Steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/itsakshay-git/to-do-list-application
   ```
2. Navigate to the project directory:
   ```sh
   cd To-Do List application
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open the application in your browser at `http://localhost:5173`

## Project Structure

```

```

## Components

### 1. `App.jsx`

- Manages the main state of the application.
- Contains logic for adding, deleting, and updating tasks.

### 2. `Header.jsx`

- Displays the application title.

### 3. `ToDoList.jsx`

- Renders the list of tasks dynamically using the `map` function.

### 4. `ToDoItem.jsx`

- Displays individual tasks with options to edit, delete, and mark as complete.

## Usage

- Type a task into the input field and press **Add or +**.
- Click the checkbox to mark a task as **completed**.
- Click the **edit** icon to modify a task and save changes.
- Click the **delete** icon to remove a task.

## Technologies Used

- React.js
- Vite
- CSS (for styling)

## Deployment

The project is deployed using **Netlify**:

```sh

```
