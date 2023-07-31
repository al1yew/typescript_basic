import { Todo } from "./model";

export type Actions =
    | {
          type: "add";
          payload: string;
      }
    | {
          type: "delete";
          payload: number;
      }
    | {
          type: "done";
          payload: number;
      }
    | {
          type: "edit";
          payload: {
              id: number;
              todo: string;
          };
      };

const TodoReducer = (state: Todo[], action: Actions) => {
    if (action.type === "add") {
        return [
            ...state,
            { id: Date.now(), todo: action.payload, isDone: false },
        ];
    }

    if (action.type === "done") {
        return state.map((todo) =>
            todo.id === action.payload
                ? { ...todo, isDone: !todo.isDone }
                : todo
        );
    }

    if (action.type === "delete") {
        return state.filter((todo) => todo.id !== action.payload);
    }

    if (action.type === "edit") {
        return state.map((todo) => {
            return todo.id === action.payload.id
                ? { ...todo, todo: action.payload.todo }
                : todo;
        });
    }

    return state;
};

export default TodoReducer;
