export const TodoTypes = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",
    REMOVE_TODO: "REMOVE_TODO"
}

let countId = 4;

export const addTodo = text => {
    return {
        type: TodoTypes.ADD_TODO,
        item: {
            text,
            id: countId++,
            done: 0
        }
    }
}

export const toggleTodo = id => {
    return {
        type: TodoTypes.TOGGLE_TODO,
        id
    }
}

export const removeTodo = id => {
    return {
        type: TodoTypes.REMOVE_TODO,
        id
    }
}