import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useReducer } from "react";
import TodoReducer from "./reducer";

const App = () => {
    const [state, dispatch] = useReducer(TodoReducer, []);

    return (
        <div className="App">
            <h1 className="header">Taskify</h1>
            <InputField dispatch={dispatch} />
            <TodoList state={state} dispatch={dispatch} />
        </div>
    );
};

export default App;
