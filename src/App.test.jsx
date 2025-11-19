import { describe, it, vi, expect, beforeEach, beforeAll } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import * as apiModule from "./service/api"; // Import the API module

// At the top of your App.test.jsx (before tests)
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});


// Mock the api function
vi.mock("./service/api", () => ({
  api: vi.fn(),
}));

describe("App Component", () => {
  const mockTasks = [
    { id: 1, title: "Task 1", description: "Desc 1", completed: false },
    { id: 2, title: "Task 2", description: "Desc 2", completed: false },
  ];

  beforeEach(() => {
    // Reset mocks before each test
    apiModule.api.mockReset();
  });

  it("renders Add a Task and Recent Tasks headings", async () => {
    apiModule.api.mockResolvedValueOnce(mockTasks);
    render(<App />);

    // Wait for headings to appear after loading
    expect(await screen.findByText(/Add a Task/i)).toBeInTheDocument();
    expect(await screen.findByText(/Recent Tasks/i)).toBeInTheDocument();
  });

  it("allows user to type in task form", async () => {
    apiModule.api.mockResolvedValueOnce(mockTasks);
    render(<App />);

    const titleInput = await screen.findByPlaceholderText(/Title/i);
    const descriptionInput = await screen.findByPlaceholderText(/Description/i);

    fireEvent.change(titleInput, { target: { value: "New Task" } });
    fireEvent.change(descriptionInput, { target: { value: "Task Description" } });

    expect(titleInput.value).toBe("New Task");
    expect(descriptionInput.value).toBe("Task Description");
  });

  it("calls onAdd when form is submitted", async () => {
    apiModule.api.mockResolvedValueOnce(mockTasks); // for initial fetch
    const newTask = { id: 3, title: "Test Task", description: "Test Desc" };
    apiModule.api.mockResolvedValueOnce(newTask); // for adding task

    render(<App />);

    const titleInput = await screen.findByPlaceholderText(/Title/i);
    const descriptionInput = await screen.findByPlaceholderText(/Description/i);
    const addButton = await screen.findByRole("button", { name: /Add Task/i });

    fireEvent.change(titleInput, { target: { value: "Test Task" } });
    fireEvent.change(descriptionInput, { target: { value: "Test Desc" } });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(titleInput.value).toBe("");
      expect(descriptionInput.value).toBe("");
    });

    // Optional: check if new task is displayed
    expect(await screen.findByText(/Test Task/i)).toBeInTheDocument();
  });
});
