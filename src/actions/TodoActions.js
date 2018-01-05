export const TodoTypes = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",
    REMOVE_TODO: "REMOVE_TODO",
    STATUS_FILTER: "STATUS_FILTER",
    CHECK_ALL: "CHECK_ALL",
    UNCHECK_ALL: "UNCHECK_ALL",
    CLEAR_ALL: "CLEAR_ALL"
}

export const TodoFilterType = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_DONE: "SHOW_DONE",
    SHOW_UNDONE: "SHOW_UNDONE"
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

export const filterTodo = status => {
    return {
        type: TodoTypes.STATUS_FILTER,
        status
    }
}

export const checkAll = status => {
    return {
        type: status === 1 ? TodoTypes.CHECK_ALL : TodoTypes.UNCHECK_ALL,
        status
    }
}

export const clearAllTodo = type => {
    return {
        type: TodoTypes.CLEAR_ALL
    }
}