const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const error = document.querySelector("#task-error");
const list = document.querySelector("#task-list");
const count = document.querySelector("#task-count");
const empty = document.querySelector("#empty-state");
const filters = document.querySelectorAll("[data-filter]");
let tasks = [];
let filter = "all";
let nextId = 1;

function render(focusIndex = -1, control = "input") {
  const visible = tasks.filter(task => filter === "all" || !task.done);
  list.replaceChildren();

  visible.forEach((task, index) => {
    const row = document.createElement("li");
    row.className = `task-row${task.done ? " is-done" : ""}`;
    row.dataset.id = task.id;

    const label = document.createElement("label");
    label.className = "task-label";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      render(index);
    });

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.title;
    label.append(checkbox, text);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "delete-button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Delete ${task.title}`);
    remove.addEventListener("click", () => {
      tasks = tasks.filter(item => item.id !== task.id);
      render(index, "button");
    });

    row.append(label, remove);
    list.append(row);
  });

  const open = tasks.filter(task => !task.done).length;
  count.textContent = `${open} open · ${tasks.length} total`;
  empty.hidden = visible.length > 0;
  empty.textContent = tasks.length === 0
    ? "Nothing here yet. Add your first task above."
    : "No open tasks. Nicely done.";
  filters.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  });

  // Preserve keyboard focus when a row is updated or removed.
  if (focusIndex >= 0) {
    const row = list.children[Math.min(focusIndex, list.children.length - 1)];
    (row?.querySelector(control) || input).focus();
  }
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) {
    error.hidden = false;
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }
  tasks.push({ id: nextId++, title, done: false });
  input.value = "";
  input.removeAttribute("aria-invalid");
  error.hidden = true;
  render();
  input.focus();
});

input.addEventListener("input", () => {
  input.removeAttribute("aria-invalid");
  error.hidden = true;
});

filters.forEach(button => {
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    render();
  });
});

render();
