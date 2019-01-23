import * as constants from '../constants/todo';

export interface IAddTodo {
    type: constants.ADD_TODO
    text: 'Build my first Redux app'
}

export interface IToggleTodo {
    type: constants.TOGGLE_TODO
    index?: 5
}

export interface IsetVisibilityFilter {
    type: constants.SET_VISIBILITY_FILTER
    filter: constants.SHOW_COMPLETED;
}

export type TODO_ACTION = IAddTodo | IToggleTodo | IsetVisibilityFilter;


export function addTodo(text: any): IAddTodo {
    return {
        text,
        type: constants.ADD_TODO
    }
}

export function toggleTodo(): IToggleTodo {
    return {
        type: constants.TOGGLE_TODO
    }
}

export function setVisibilityFIlter(): IsetVisibilityFilter {
    return {
        filter: "SHOW_COMPLETED",
        type: "SET_VISIBILITY_FILTER"
    }
}
