let one = document.querySelector("form.one");
let intup = document.querySelector("form.one input:first-child");
let tasks = document.querySelector("form.two");

//  1 التحقق من وجود بيانات في المخزن
if (localStorage.length === 0) {
    let mytasks = ["fist task", "second task", "third task", "fourth task"]
    for (let i=0; i<mytasks.length; i++) {
        addTask(mytasks[i])
    }
} else {
    for (let i=0; i < window.localStorage.length; i++) {
        addTask(window.localStorage.getItem(window.localStorage.key(i)))
    }
}


//  2 القدرة على إظافة مهام جديدة
one.addEventListener("submit", (e) => {
    e.preventDefault();
    if(intup.value.trim() !== "") {
        let key = Math.random();
        window.localStorage.setItem(key, intup.value),
        addTask(intup.value);
        intup.value = "";
        
    }
})

// function makeKey () {
//     if (window.localStorage.length === 0) {
//         return 0;
//     } else {
//        return window.localStorage.length;
//     }
// }

function addTask (taskText = "") {
    let task = document.createElement("div");
    task.classList.add("task");

    let hr = document.createElement("hr");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    let id = Math.random().toString()
    checkbox.setAttribute("id", id)
    
    let label = document.createElement("label");
    label.setAttribute("for", id);
    label.append(` ${taskText}`)
    
    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-delete-left");
    icon.addEventListener("click", function () {deleteparent(this)})

    task.appendChild(hr);
    task.appendChild(checkbox);
    task.appendChild(label);
    task.appendChild(icon);
    tasks.appendChild(task);
}

// القدرة على حذف المهام الحالية و القديمة 3
function deleteparent (element) {
    element.parentElement.remove();
    // remove from localStorage
    let index = 0
    for (let i=0; i<window.localStorage.length ; i++) {
        if (window.localStorage.key(i) === element.parentElement.label) {
            index = i
        }
    }
    window.localStorage.removeItem(window.localStorage.key(index))
} 




