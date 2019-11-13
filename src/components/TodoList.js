import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class extends Component {
    render() {
        return (
            <div>
                <h1>todo list</h1>
                <TodoItem />
            </div>
        )
    }
}
