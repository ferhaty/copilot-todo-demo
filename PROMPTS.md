# Reader exercises

Use these prompts with GitHub Copilot CLI to build your own version of the app.
Review the files and check the result after each step.

## 1. Build the small version

> Create a tiny browser todo app with only index.html, style.css, and app.js.
> Use a classic script: no modules, imports, fetch, framework, backend, database,
> package.json, or build step. It must open by double-clicking index.html.
> Let me add a task, mark it complete or incomplete, and delete it. Keep the
> tasks in memory: refreshing clears them. Reject empty or whitespace-only
> task titles. Put user text into textContent, never innerHTML. Use visible
> labels, native checkboxes, accessible button names, and keyboard controls.
> Make a restrained light interface that works on desktop and a 390px-wide
> mobile screen. Explain how to open it and give me a short manual checklist.
> Do not publish, deploy, or create a remote repository.

Open the result locally and check the basic interactions before continuing.

## 2. Add one follow-up feature

> Add an Open tasks filter beside All. All shows every task; Open tasks hides
> completed tasks. Switching filters must not delete or reset anything. Show
> which filter is active with aria-pressed, and keep keyboard focus useful
> when completing or deleting a visible task. If no open tasks remain, show
> a clear empty state. Keep the same three runtime files and in-memory model;
> do not add dependencies or any other feature.

Recheck adding, checking, unchecking, deleting, both filters, whitespace-only
input, literal HTML-like text, a long task, keyboard navigation, and refresh.
Check at desktop and mobile widths and inspect the browser console for errors.
