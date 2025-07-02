Task Input and Display: Users can enter a task name and a due date. When they click the Add button, the task is displayed in a list format on the page.

Persistent Storage with localStorage: The code uses localStorage to save the to-do list so that the tasks remain even after refreshing or closing the browser.

Load Saved Tasks: When the page loads, the code checks if there’s any saved task list in localStorage. If available, it loads those tasks instead of starting from an empty list.

Add Task Functionality: The addTodo() function takes user input, adds the task to the list, clears the input fields, and then calls renderTodoList() and saveToStorage() to update both the UI and the stored data.

Delete Task Functionality: Each task has a Delete button. When clicked, it removes the corresponding task from the list, updates the UI, and re-saves the modified list in localStorage.

Automatic Rendering: The renderTodoList() function dynamically updates the page content by looping through the todoList array and creating HTML for each item.

Reusable Save Function: The saveToStorage() function is used both when adding and deleting tasks to update the data in localStorage consistently.

Input Validation: The app checks that both the task name and due date are entered before adding the task, preventing empty entries.
