import React from "react";
import "./style.css";

interface propsType {
    title: string
}

const TodoItem: React.FC<propsType> = ({ title }) => {
    return (
        <li>
            {title}
        </li>
    )
}

export default TodoItem;