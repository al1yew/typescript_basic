import { Todo } from "../model";
import { Actions } from "../reducer";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
    state: Todo[];
    dispatch: React.Dispatch<Actions>;
}

const TodoList = ({ state, dispatch } : Props) => {
    return (
        <div className="todos">
            {state.map((todo) => {
                return (
                    <SingleTodo
                        key={todo.id}
                        dispatch={dispatch}
                        todo={todo}
                    />
                );
            })}
        </div>
    );
};
export default TodoList;
