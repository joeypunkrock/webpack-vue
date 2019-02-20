<template>
    <div id="todo-list">
        <h3>Your todo list</h3>
        <ul>
            <li 
            v-for="(todo, index) in todos" 
            v-bind:key="todo.id">
                {{ todo.title }}
                <button v-on:click="todos.splice(index, 1)">Remove</button>
            </li>
        </ul>

        <form v-on:submit.prevent="addNewTodo">
            <label for="new-todo">Add a todo</label>
            <input
                v-model="newTodoText"
                id="new-todo"
                placeholder="E.g. Feed the cat"
            >
            <button>Add</button>
        </form>

    </div>
</template>

<script>

export default {
    name: 'TodoList',
    data: function () {
        return {
            newTodoText: '',
            todos: [
                {
                    id: 1,
                    title: 'Do the dishes',
                },
                {
                    id: 2,
                    title: 'Take out the trash',
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
            ],
            nextTodoId: 4
        }
    },
    methods: {
        addNewTodo: function () {
            if(this.newTodoText != '') {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                });
            }
            this.newTodoText = '';
        }
    }
}

</script>

<style>

#todo-list {
    margin-bottom: 1rem;
}

ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 5px;
}

li {
    padding: 5px 0;
}

h3 {
    margin-bottom: 5px;
}

input {
    border: solid 1px #ccc;
    padding: 5px;
    border-radius: 3px;
}

</style>
