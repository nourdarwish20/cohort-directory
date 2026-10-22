# Cohort Directory

A responsive, interactive member directory built with **React, TypeScript, Tailwind CSS, and Vite** as part of my self-directed learning journey in frontend development and software engineering.

The project began as a simple React component-based application and evolved into a dynamic directory featuring REST API integration, state management, React lifecycle hooks, activity tracking, and performance optimization.

## Project Overview

Cohort Directory allows users to browse, search, filter, contact, and remove members through a responsive interface.

The application retrieves sample user data from an external API and transforms it into a structured member directory.

This project focuses on understanding React fundamentals, reusable component architecture, data flow, asynchronous operations, lifecycle management, and performance optimization.

## Application Preview

![Cohort Directory Screenshot](src/screenshots/cohort-directory.png)

## Features

### Member Management

- **Dynamic Member Directory:** Retrieve and display members from an external REST API.
- **Live Search:** Search members by name with case-insensitive matching.
- **Seniority Filtering:** Filter members by All, Junior, or Senior.
- **Adjustable Member Limit:** Enter a number between 1 and 10 to control how many members are fetched.
- **Contact Members:** Open an email draft addressed to a member using a `mailto:` link.
- **Member Removal:** Remove individual members from the displayed directory without modifying the external API.

### Dashboard Statistics

A reusable `StatsBar` component displays four statistics:

- **Total Members:** Number of members currently loaded.
- **Seniors:** Number of senior-level members.
- **Juniors:** Number of junior-level members.
- **Cohort Score:** A weighted score calculated using member seniority.

The cohort score is calculated as:

`Cohort Score = (Seniors × 3) + (Juniors × 1)`

The statistics update when members are fetched or removed.

### React Lifecycle & Performance

- **State Management:** Manage application data and interactions using `useState`.
- **API Integration:** Fetch user data from JSONPlaceholder using the Fetch API.
- **Lifecycle Management:** Fetch data using `useEffect` and clean up effects when dependencies change or components unmount.
- **Debouncing:** Wait 500 milliseconds after member-limit changes before sending API requests.
- **Request Cancellation:** Use `AbortController` to cancel outdated or unnecessary requests.
- **Automatic Search Focus:** Focus the search input when it mounts using `useRef`.
- **Memoization:** Use `useMemo` to avoid recalculating an expensive cohort score on unrelated state changes.
- **Conditional Rendering:** Display loading, error, and empty-result states.

### Session Activity Tracking

The application includes a Session Activity feature that records user interactions using `useRef`.

Tracked actions include:

- Search changes
- Seniority filter selections
- Member-limit changes
- Contact button clicks
- Member removals

A **Show Session Activity** button displays the recorded activity history and the number of API request attempts in the browser console.

Using `useRef` allows these values to be updated without triggering additional renders.

### User Interface

- Responsive member-card layout.
- Reusable React components.
- Tailwind CSS styling.
- Interactive controls and buttons.
- A four-statistics dashboard.
- A clean layout for different screen sizes.

## Technologies Used

| Technology      | Purpose                                        |
| --------------- | ---------------------------------------------- |
| React           | Reusable components and interactive interfaces |
| TypeScript      | Type safety, interfaces, and component props   |
| Tailwind CSS    | Responsive styling                             |
| Vite            | Development server and production builds       |
| Fetch API       | Retrieving external data                       |
| JSONPlaceholder | Sample REST API for user information           |

## React Concepts Practiced

### React Fundamentals

- Functional components and component composition
- Props and destructuring
- TypeScript types and interfaces
- Event handling with `onClick` and `onChange`
- Dynamic rendering using `map()` and `filter()`
- Conditional rendering
- Parent-to-child communication using callback props

### React Hooks & Lifecycle

- `useState` — Managing component state
- `useEffect` — Handling API requests and side effects
- `useRef` — DOM references, timers, counters, and activity history
- `useMemo` — Memoizing expensive calculations

### Additional Concepts

- Asynchronous JavaScript using `async/await`
- REST API integration
- API response transformation
- Debouncing with `setTimeout` and `clearTimeout`
- Request cancellation with `AbortController`
- Effect cleanup
- Component mounting, updating, and unmounting
- React re-rendering behavior
- State-driven UI updates
- Performance optimization
- Responsive design with Tailwind CSS

## Project Structure

```text
cohort-directory/
├── src/
│   ├── components/
│   │   ├── EmptyState.tsx
│   │   ├── FilterBar.tsx
│   │   ├── Header.tsx
│   │   ├── LimitControl.tsx
│   │   ├── MemberCard.tsx
│   │   ├── MemberList.tsx
│   │   ├── SearchBar.tsx
│   │   └── StatsBar.tsx
│   ├── utils/
│   │   └── computeCohortScore.ts
│   ├── screenshots/
│   │   └── cohort-directory.png
│   ├── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nourdarwish20/cohort-directory.git
```

### 2. Navigate to the project

```bash
cd cohort-directory
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### 5. Build for production

```bash
npm run build
```

The application has been successfully compiled using TypeScript and built with Vite.

## Development Journey

### Module 2 — Building Components

The initial version focused on React fundamentals and reusable component architecture.

I practiced:

- Building functional components
- Passing and receiving props
- Rendering member lists using `map()`
- Handling user interactions
- Filtering members
- Structuring a responsive interface with Tailwind CSS

The first version used a local member array and focused on understanding component responsibilities and data flow.

### Module 3 — State & Lifecycle

The second stage introduced a dynamic application powered by an external REST API.

I implemented:

- State management with React hooks
- Asynchronous API fetching
- Member-limit control and debouncing
- Search input autofocus
- Contact and Remove functionality
- Session activity tracking with `useRef`
- API request counting
- Dynamic dashboard statistics
- Cohort score optimization using `useMemo`
- Effect cleanup and request cancellation

This module strengthened my understanding of how React responds to state changes, manages side effects, and avoids unnecessary calculations.

## Key Learning Takeaways

Throughout this project, I gained a better understanding of:

1. How React components communicate through props and callbacks.
2. How state changes update the user interface.
3. When and why to use different React hooks.
4. How to fetch, transform, and display external API data.
5. Why cleanup and debouncing matter.
6. How `useRef` can store information without triggering renders.
7. How `useMemo` can improve performance when calculations are expensive.
8. How to organize a React application into maintainable components.

## Learning Journey

This project is part of my independent learning journey, supported by practical exercises from the **Software Engineering Excellence course by Sami Shames Deen**.

My focus was not only on completing the application, but also on understanding the logic behind each feature, how React components interact, and how to build maintainable frontend applications.

The project reflects my continued effort to strengthen my software engineering skills through hands-on practice and incremental development.

---

**Project Type:** Self-Learning / React Practice

**Author:** [Nour Darwish](https://github.com/nourdarwish20)

**GitHub Repository:** [Cohort Directory](https://github.com/nourdarwish20/cohort-directory)
