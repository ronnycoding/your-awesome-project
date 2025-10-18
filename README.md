# Todo App

A modern, responsive todo application built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- ✅ Add new todos with text descriptions
- ✅ Mark todos as complete/incomplete
- ✅ Edit existing todo text
- ✅ Delete todos
- ✅ Persistent storage using localStorage
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Clean, intuitive interface
- ✅ Keyboard navigation support

## Tech Stack

- **Framework**: Next.js 15.5+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API
- **Persistence**: localStorage

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ronnycoding/your-awesome-project.git
cd your-awesome-project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
your-awesome-project/
├── app/
│   ├── layout.tsx       # Root layout with TodoProvider
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── TodoList.tsx     # Main todo list container
│   ├── TodoItem.tsx     # Individual todo item
│   ├── AddTodoForm.tsx  # Form to add new todos
│   └── EditTodoForm.tsx # Inline editing form
├── lib/
│   ├── types.ts         # TypeScript interfaces
│   ├── todoContext.tsx  # React Context for state
│   └── localStorage.ts  # localStorage utilities
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Usage

### Adding a Todo
1. Type your task in the input field
2. Press Enter or click "Add" button
3. The todo appears at the top of the list

### Editing a Todo
1. Click the edit icon (pencil) on any todo
2. Modify the text in the inline editor
3. Press Enter or click "Save"
4. Press Escape or click "Cancel" to discard changes

### Completing a Todo
- Click the checkbox to toggle completion status
- Completed todos show with strikethrough text

### Deleting a Todo
1. Click the delete icon (trash) on any todo
2. Confirm the deletion in the dialog

## Features Implementation

### CRUD Operations
- **Create**: Add new todos via AddTodoForm
- **Read**: Display all todos in TodoList
- **Update**: Edit todos inline with EditTodoForm
- **Delete**: Remove todos with confirmation

### State Management
- React Context API for global state
- Automatic localStorage sync
- Optimistic UI updates

### Responsive Design
- Mobile-first approach
- Touch-friendly tap targets (44x44px minimum)
- Responsive layouts at all breakpoints

### Accessibility
- Semantic HTML elements
- ARIA labels for screen readers
- Keyboard navigation support
- Visible focus states
- High contrast ratios (WCAG AA compliant)

## Contributing

Issues and pull requests are welcome! See the [GitHub repository](https://github.com/ronnycoding/your-awesome-project) for more details.

## License

ISC

## Acknowledgments

Built as part of issue #1: [EPIC] Build Next.js Todo Application with Tailwind CSS