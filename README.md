# React Feedback Card Component 🚀

A polished, Apple-inspired feedback form built with **React** and **Vite**. This project demonstrates React event handling, controlled form fields, state management, and conditional rendering.

## Features

- **Controlled inputs**: React state keeps the name and feedback fields in sync with the UI.
- **Live character counter**: Shows the current feedback length against a 100-character target.
- **Over-limit warning**: The counter and warning change when feedback exceeds 100 characters. The form allows typing beyond the target so the warning can be seen.
- **Submit validation**: The submit button stays disabled until feedback is entered.
- **Conditional success screen**: Submitting the form displays a thank-you message.
- **Reset action**: “Give more feedback” clears the feedback and restores the form.
- **Responsive design**: A separate stylesheet provides the soft glass-inspired card design across screen sizes.
- **No page reload on submit**: Form submission is handled with `event.preventDefault()`.

## React concepts demonstrated

1. **Event handling**: `onChange` tracks field changes and `onSubmit` handles form submission.
2. **State management**: `useState` stores the name, feedback text, and submission status.
3. **Conditional rendering**:
   - Ternary expressions select the counter's warning class.
   - Logical `&&` renders the over-limit warning only when needed.
   - An early return renders the thank-you screen after submission.
4. **Controlled components**: Input values are provided by React state and updated by change handlers.

## Project structure

```text
feedback-assignment/
├── src/
│   ├── components/
│   │   ├── FeedbackCard.jsx
│   │   └── FeedbackCard.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (npm is included with Node.js)

### Install and run

```bash
git clone https://github.com/your-username/feedback-assignment.git
cd feedback-assignment
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`) in your browser.

### Production build

```bash
npm run build
```

## Homework requirements checklist

- [x] Controlled feedback textarea with a live character counter.
- [x] 100-character target with a visible warning when exceeded.
- [x] Submit button disabled when feedback is empty.
- [x] Prevent page reload and show a thank-you screen after submission.
- [x] “Give more feedback” button resets the form.
