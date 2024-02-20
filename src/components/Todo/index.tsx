import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";

const Todo: React.FC = () => {
    return (
        <div className="todo">
            <ul>
                <TodoItem title={"Pray"} />
                <TodoItem title={"Eat"} />
                <TodoItem title={"Code"} />
                <TodoItem title={"Sleep"} />
            </ul>
        </div>
    )
}

export default Todo;