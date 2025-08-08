// Exercise 1: Update Text on Button Click
(function () {
    const btn = document.getElementById("helloBtn") as HTMLButtonElement;
    const output = document.getElementById("output") as HTMLParagraphElement;

    btn.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();
        output.textContent = "Hello from TypeScript!";
    })
})();

// Exercise 2: Input and Display
(function () {
    const btn = document.getElementById("submitBtn") as HTMLButtonElement;
    const name = document.getElementById("nameInput") as HTMLInputElement;
    const output = document.getElementById("displayName") as HTMLParagraphElement;

    btn.addEventListener("click", e => {
        output.textContent = name.value
    })
})();

// Exercise 3: Toggle Visibility
(function () {
    const btn = document.getElementById("toggleBtn") as HTMLButtonElement;
    const text = document.getElementById("hiddenText") as HTMLElement;
    btn.addEventListener("click", e => {
        text.style.display = text.style.display == "none" ? "block" : "none"
    })
})();

// Exercise 4: Add Items to List
(function () {
    const input = document.getElementById("itemInput") as HTMLInputElement;
    const btn = document.getElementById("addBtn") as HTMLButtonElement;
    const list = document.getElementById("itemList") as HTMLUListElement;
    btn.addEventListener("click", e => {
        const text = input.value;
        if (!text) return;
        const li = document.createElement('li') as HTMLLIElement;
        li.textContent = text
        list.prepend(li)
        input.value = ""
    })
})();

// Exercise5: Delete Items from List
(function () {
    const input = document.getElementById("e5_itemInput") as HTMLInputElement;
    const btn = document.getElementById("e5_addBtn") as HTMLButtonElement;
    const list = document.getElementById("e5_itemList") as HTMLUListElement;
    btn.addEventListener("click", e => {
        const text = input.value;
        if (!text) return;
        const li = document.createElement('li') as HTMLLIElement;
        const textSpan = document.createElement('span') as HTMLSpanElement;
        textSpan.textContent = text
        li.append(textSpan)
        const delBtn = document.createElement('button') as HTMLButtonElement;
        delBtn.textContent = "Delete"
        delBtn.style.marginLeft = "5px";
        delBtn.addEventListener('click', () => li.remove())
        li.append(delBtn)
        list.prepend(li)
        input.value = ""
    })
})();


// Exercise 6: Counter with Increment & Decrement
(function () {
    const incBtn = document.getElementById("incBtn") as HTMLButtonElement;
    const decBtn = document.getElementById("decBtn") as HTMLButtonElement;
    const counter = document.getElementById("counter") as HTMLInputElement;

    incBtn.addEventListener("click", () => {
        counter.value = (Number(counter.value) + 1)?.toFixed(2);
    });

    decBtn.addEventListener("click", () => {
        counter.value = (Number(counter.value) - 1)?.toFixed(2);
    });
}
)();

// Exercise 7: Change Background Color
(function () {
    const select = document.getElementById("colorSelect") as HTMLSelectElement;
    const box = document.getElementById("colorBox") as HTMLDivElement;
    select.addEventListener("change", (e) => {
        // FIXME: What is the best way to pass here the type of the currentTarget?
        if (!(e.currentTarget instanceof HTMLSelectElement)) return;
        const color = e.currentTarget.options[e.currentTarget.selectedIndex].value;
        box.style.backgroundColor = color;
    })
})();

// Exercise 8: Character Count
(function () {
    const text = document.getElementById("textInput") as HTMLTextAreaElement;
    const output = document.getElementById("charCount") as HTMLParagraphElement;
    text.addEventListener("input", e => {
        const count = text.value.length
        output.textContent = `${count} characters`
    })
})();

// Bonus Challenge: To-Do App
(function () {
    const newTask = document.getElementById("todoInput") as HTMLInputElement;
    const addBtn = document.getElementById("addTodo") as HTMLButtonElement;
    const list = document.getElementById("todoList") as HTMLUListElement;
    const toggleDoneHandler = (e: Event): void => {
        const checkbox = e.currentTarget
        if (!(checkbox instanceof HTMLInputElement)) return;
        const name = checkbox.parentElement?.querySelector('span.title') as HTMLSpanElement;
        if (checkbox.checked) {
            name.style.textDecorationLine = "line-through"
        } else {
            name.style.textDecorationLine = "none"
        }
    }
    const removeTaskHandler = (e: Event): void => {
        const btn = e.currentTarget
        if (!(btn instanceof HTMLInputElement)) return;
        const task = btn.parentElement as HTMLLIElement;
        task.remove()
    }
    const createTask = (title: string): string => {
        const li = document.createElement("li")
        li.id = window.crypto.randomUUID();

        const done = document.createElement("input") as HTMLInputElement
        done.type = "checkbox"
        done.addEventListener("change", toggleDoneHandler)

        const remove = document.createElement("input") as HTMLInputElement
        remove.type = "button"
        remove.style.backgroundColor = "red"
        remove.textContent = "X"
        remove.addEventListener("click", removeTaskHandler)

        const text = document.createElement("span") as HTMLSpanElement
        text.textContent = title
        text.classList.add("title")

        li.append(done)
        li.append(text)
        li.append(remove)
        list.append(li)

        return li.id
    }
    addBtn.addEventListener("click", () => {
        if (!newTask.value) return;
        createTask(newTask.value);
    })

})();
