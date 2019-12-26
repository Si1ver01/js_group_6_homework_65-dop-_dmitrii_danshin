import React, { useEffect, useState,useContext } from "react";
import MainItem from "./MainItem/MainItem";
import "./Main.scss";
import { MainContext } from "../../../context/MainContext/mainContext";
import { SEND_FILMS } from "../../../context/types";

const Main = () => {
  const { filmsList, removeMessage, editMessage } = useContext(MainContext);

  useEffect(() => {
    dispatch({ ...filmsList });
    // eslint-disable-next-line
  }, [filmsList.length]);

  const [state, dispatch] = useState([]);

  const handlerInp = (event, index) => {
    const customState = { ...state };
    customState[index] = { ...customState[index], value: event.target.value };
    dispatch({ ...customState });
  };

  return (
    <div className="Main">
      <p>To watch list:</p>
      {state &&
        Object.keys(state).map((elem, index) => (
          <MainItem
            text={state[elem].value}
            key={state[elem].id}
            handlerInput={event => handlerInp(event, index)}
            handlerButton={() =>
              removeMessage("films", state[elem].id, SEND_FILMS)
            }
            handlerButtonSave={() =>
              editMessage("films", state[elem].id, state[elem], SEND_FILMS)
            }
          />
        ))}
    </div>
  );
};

export default Main;
