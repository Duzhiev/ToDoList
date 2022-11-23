const list = document.getElementById('list')
const ul = document.getElementById('ul')
const input = document.getElementById('search')
const btn = document.getElementById('btn')
const li1 = document.createElement('li')

const affairs = [
    {
        text: 'Первое дело',
        done: false
    },
    {
        text: 'Второе дело',
        done: false
    },
    {
        text: 'Третье дело',
        done: false
    },
    {
        text: 'Четвертое дело',
        done: false
    },
    {
        text: 'Пятое дело',
        done: false
    }
]

function render() {
    ul.textContent = ""
    for (let i = 0; i < affairs.length; i++) {
        const li = document.createElement('li');
        const text = document.createElement('div');
        text.textContent = affairs[i].text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "X"
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            remove(i)
        })

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.addEventListener('click', (e) => {
            if (checkbox.checked) {
                e.target.parentElement.style.color = 'red'
            } else {
                e.target.parentElement.style.color = 'black'
            }
        })
        li.append(checkbox, text, deleteBtn)
        ul.append(li)
    }
}
render()

function remove(index) {
    affairs.splice(index, 1)
    render()
}

const addTodo = (text) => {
    affairs.push({ text: text, done: false })
    render()
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value !== "") {
        addTodo(input.value)
    }
    input.value = "";
})

