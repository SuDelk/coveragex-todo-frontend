# CoverageX Todo Frontend

A modern, responsive Todo application frontend built with React, Vite, and Tailwind CSS. This application provides an intuitive interface for managing tasks with real-time updates and a clean, user-friendly design.

## Project Description

CoverageX Todo Frontend is a single-page application that allows users to add, view, and manage their tasks efficiently. The application features a split-panel interface where users can add new tasks on the left side and view their recent tasks on the right side. Tasks can be marked as done with a simple click, and the interface provides instant feedback through SweetAlert2 notifications.

The frontend communicates with a backend API to persist tasks and maintain state across sessions. It features a modern dark mode support, responsive design, and smooth animations for an enhanced user experience.

## Features

- ✅ **Add Tasks**: Create new tasks with title and description
- ✅ **View Recent Tasks**: Display the 5 most recent tasks
- ✅ **Mark as Done**: Complete tasks with a single click
- ✅ **Loading States**: Visual feedback during API operations
- ✅ **Dark Mode**: Automatic dark mode support
- ✅ **Responsive Design**: Works seamlessly on desktop and mobile devices
- ✅ **Real-time Updates**: Instant UI updates after task operations
- ✅ **Beautiful Notifications**: SweetAlert2 for user feedback
- ✅ **Smooth Animations**: Enhanced UX with CSS transitions

## Tech Stack

- **[React](https://react.dev/)** (v19.2.0) - UI library for building component-based interfaces
- **[Vite](https://vite.dev/)** (v7.2.2) - Next-generation frontend build tool
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.17) - Utility-first CSS framework
- **[SweetAlert2](https://sweetalert2.github.io/)** (v11.26.3) - Beautiful, responsive, customizable popup alerts
- **[Vitest](https://vitest.dev/)** (v4.0.10) - Blazing fast unit test framework
- **[React Testing Library](https://testing-library.com/react)** (v16.3.0) - Testing utilities for React components
- **[ESLint](https://eslint.org/)** (v9.39.1) - Code linting and quality assurance

## Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- A running backend API (default: http://localhost:3000)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/SuDelk/coveragex-todo-frontend.git
   cd coveragex-todo-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (see below)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port displayed in your terminal)

## Environment Variables

The application uses environment variables to configure the backend API endpoint. Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000
```

**Available Environment Variables:**

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:3000` |

> **Note**: Currently, the API base URL is hardcoded in `src/service/api.ts`. To use environment variables, update the file to use `import.meta.env.VITE_API_BASE_URL`.

## Running Tests

The project uses Vitest and React Testing Library for testing.

### Run all tests
```bash
npm run test
```

### Run tests in watch mode
```bash
npm run test:watch
```

### Test Coverage
Tests are located in `src/App.test.jsx` and cover:
- Component rendering
- Form submission
- Task addition functionality

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready optimized bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run test` | Run all tests once |
| `npm run test:watch` | Run tests in watch mode for development |

## Folder Structure

```
coveragex-todo-frontend/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Images and static resources
│   │   └── react.svg      # React logo
│   ├── components/        # React components
│   │   ├── AddTaskForm.jsx    # Form for adding new tasks
│   │   ├── TaskCard.jsx       # Individual task display
│   │   └── TaskList.jsx       # List of tasks
│   ├── service/           # API and external services
│   │   └── api.ts         # API client for backend communication
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   ├── App.test.jsx       # Application tests
│   ├── main.jsx           # Application entry point
│   ├── index.css          # Global styles and Tailwind imports
│   └── setupTests.js      # Test environment configuration
├── Dockerfile             # Docker configuration for deployment
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── vitest.config.js       # Vitest testing configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── eslint.config.js       # ESLint configuration
```

## Deployment

### Docker Deployment

The project includes a Dockerfile for containerized deployment:

1. **Build the Docker image**
   ```bash
   docker build -t coveragex-todo-frontend .
   ```

2. **Run the container**
   ```bash
   docker run -p 80:80 coveragex-todo-frontend
   ```

The application will be available at `http://localhost`.

### Production Build

For manual deployment to a static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your hosting provider:
   - **Netlify**: Drag and drop the `dist` folder or connect your Git repository
   - **Vercel**: Run `vercel` command or connect via GitHub
   - **GitHub Pages**: Use `gh-pages` package or GitHub Actions
   - **AWS S3**: Upload contents to an S3 bucket configured for static hosting
   - **Nginx**: Copy `dist` contents to your web server directory

### Environment Variables in Production

Remember to configure your production environment variables based on your hosting provider's documentation:
- **Netlify**: Environment variables in Site Settings
- **Vercel**: Environment variables in Project Settings
- **Docker**: Use `--env-file` or `-e` flags when running containers

## Contributing

We welcome contributions to improve CoverageX Todo Frontend! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Code Style Guidelines

- Use ESLint configuration provided in the project
- Follow React best practices and hooks guidelines
- Write meaningful commit messages
- Add tests for new functionality
- Update README.md if you change functionality

### Reporting Issues

If you find a bug or have a feature request, please open an issue on GitHub with:
- A clear title and description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
