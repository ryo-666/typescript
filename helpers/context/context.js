import { createContext, useState } from "react";

export const Context = createContext();

const Provider = (props) => {
    const [selectedTask, setSelectedTask] = useState( { id: 0, titile: "" });

    return (
        <Context.Provider
            value={{
                selectedTask,
                setSelectedTask,
            }}
        >
            {props.children}
        </Context.Provider>
    )

}

export default Provider;
