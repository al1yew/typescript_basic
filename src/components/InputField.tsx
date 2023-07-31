import { useRef, useState } from "react";
import "./styles.css";
import { Actions } from "../reducer";

interface Props {
    dispatch: React.Dispatch<Actions>;
}

const InputField = ({ dispatch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [todo, setTodo] = useState("");

    return (
        <form
            className="input"
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: "add", payload: todo });
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                type="input"
                placeholder="Enter a task"
                className="input_box"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="input_submit">
                Go
            </button>
        </form>
    );
};
export default InputField;
