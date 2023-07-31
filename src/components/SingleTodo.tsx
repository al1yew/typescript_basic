import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { Actions } from "../reducer";

type Props = {
    todo: Todo;
    dispatch: React.Dispatch<Actions>;
};

const SingleTodo = ({ todo, dispatch }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id: number) => {
        dispatch({ type: "done", payload: id });
    };

    const handleDelete = (id: number) => {
        dispatch({ type: "delete", payload: id });
    };

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        dispatch({ type: "edit", payload: { id, todo: editTodo } });
        setEdit(false);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form
            className="todo_single"
            onSubmit={(e) => handleSubmit(e, todo.id)}
        >
            {edit ? (
                <input
                    type="text"
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todo_single_text"
                    ref={inputRef}
                />
            ) : todo.isDone ? (
                <s className="todo_single_text">{todo.todo}</s>
            ) : (
                <span className="todo_single_text">{todo.todo}</span>
            )}
            <div>
                <span
                    className="icon"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};
export default SingleTodo;
