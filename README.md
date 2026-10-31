# copilot-todo-demo

A tiny, dependency-free browser todo app. Add tasks, complete or uncomplete them,
delete them, and switch between **All** and **Open tasks**.

Companion example for **Getting Started with GitHub Copilot and Copilot CLI**.
See [Turing Technology Services Blog](https://blog.turingts.com/) for the article.
`PROMPTS.md` contains prompts for building your own version with Copilot CLI.

## Open it

Double-click `index.html`, or open it from your browser's File menu. No npm,
installation, build step, server, or internet connection is needed. Keep
`index.html`, `style.css`, and `app.js` in the same folder.

Tasks exist only in memory. **Refreshing or closing the page clears the list.**
Nothing is sent anywhere or saved to a database or browser storage.

## Files

- `index.html` — semantic markup, labels, and a classic deferred script.
- `style.css` — a responsive light interface using system fonts.
- `app.js` — in-memory state, safe text rendering, and UI events.
- `PROMPTS.md` — a starter exercise and one follow-up feature prompt.

## Quick manual check

1. Open the file. Add a task with **Add task**, then another with **Enter**.
2. Try an empty or whitespace-only task; it should show a helpful error.
3. Check and uncheck a task. Switch to **Open tasks** and back to **All**.
4. Delete a task. Complete every remaining task while the open filter is active.
5. Add `<b>Read this literally</b>`; it must appear as text, not bold markup.
6. Try a long task on a narrow window; it should wrap without horizontal scrolling.
7. Use **Tab**, **Shift+Tab**, **Enter**, and **Space** to operate the controls.
8. Refresh. The list should be empty again.

No test tools are required to use this app. The checklist above needs only a
browser.
