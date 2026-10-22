# Cohort Directory

A responsive web application built with **React, TypeScript, and Tailwind CSS** as part of my self-directed learning journey in frontend development and software engineering.

This project started as a simple member directory and was progressively enhanced with API integration, state management, React lifecycle hooks, and performance optimization.

## Project Overview

Cohort Directory is an interactive web application that allows users to browse, search, filter, and manage members.

The project was developed through practical exercises focused on understanding React fundamentals, component architecture, asynchronous data fetching, and performance optimization.

## Application Preview

![Cohort Directory Screenshot](src/screenshots/cohort-directory.png)

## Features

### Member Management

- **Dynamic Member Directory:** Fetch and display members from an external REST API.
- **Live Search:** Search members by name with case-insensitive matching.
- **Seniority Filtering:** Filter members by All, Junior, or Senior.
- **Member Removal:** Remove individual members from the displayed directory.
- **Adjustable Member Count:** Choose to fetch 3, 5, or 10 members.

### React Lifecycle & Performance

- **API Integration:** Retrieve user information from JSONPlaceholder using the Fetch API.
- **State Management:** Manage members, search queries, and filters using `useState`.
- **Lifecycle Management:** Fetch data using `useEffect` and handle cleanup.
- **Debouncing:** Delay API requests to avoid unnecessary calls when the selected member limit changes.
- **Input Focus:** Automatically focus the search field using `useRef`.
- **Memoization:** Optimize cohort score calculations using `useMemo`.
- **Conditional Rendering:** Display loading, error, and empty-result messages.

### User Interface

- Responsive member cards and grid layout.
- Reusable React components.
- Tailwind CSS styling.

## Technologies Used

| Technology      | Purpose                              |
| --------------- | ------------------------------------ |
| React           | Building reusable UI components      |
| TypeScript      | Type safety and component interfaces |
| Tailwind CSS    | Responsive UI styling                |
| Vite            | Development and production builds    |
| Fetch API       | Retrieving external data             |
| JSONPlaceholder | Sample REST API for member data      |

## React Concepts Practiced

**React Fundamentals**

- Functional components and component composition
- Props and destructuring
- TypeScript types and interfaces
- Event handling with `onClick` and `onChange`
- Dynamic rendering with `map()` and `filter()`
- Conditional rendering

**React Hooks & Lifecycle**

- `useState` — Managing application state
- `useEffect` — Data fetching and side effects
- `useRef` — DOM references and debounce timers
- `useMemo` — Memoizing expensive calculations

**Additional Concepts**

- Asynchronous JavaScript with `async/await`
- API response transformation
- Effect cleanup and request cancellation
- Re-rendering and React state updates
- Responsive design with Tailwind CSS

## Project Structure

```text
src/
├── components/
│   ├── Header.tsx
│   ├── MemberCard.tsx
│   ├── MemberList.tsx
│   ├── SearchBar.tsx
│   ├── FilterBar.tsx
│   └── EmptyState.tsx
├── utils/
│   └── computeCohortScore.ts
├── screenshots/
│   └── cohort-directory.png
├── types.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/nourdarwish20/cohort-directory.git
```

**2. Navigate to the project**

```bash
cd cohort-directory
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal.

**5. Build for production**

```bash
npm run build
```

## Development Journey

### Module 2 — Building Components

The initial version focused on React fundamentals, including reusable components, props, event handling, list rendering, and filtering.

I built the first version of the directory using a local array of members and organized the interface into reusable components.

### Module 3 — State & Lifecycle

The application was then enhanced with asynchronous API integration, React lifecycle hooks, debouncing, member management, and memoization.

This stage helped me better understand how React handles state updates, side effects, component re-rendering, and expensive calculations.

## Learning Journey

This project is part of my independent learning journey, supported by practical exercises from the **Software Engineering Excellence course by Sami Shames Deen**.

My focus was not only on completing the application, but also on understanding how its individual components interact, how data flows through React, and how to structure maintainable frontend code.

The project reflects my ongoing commitment to strengthening my software engineering skills through continuous learning and hands-on development.

---

**Project Type:** Self-Learning / React Practice

**Author:** [Nour Darwish](https://github.com/nourdarwish20)
