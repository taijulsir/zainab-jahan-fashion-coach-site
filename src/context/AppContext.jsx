"use client";

import { createContext, useState } from "react";

const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [selectCoach, setSelectCoach] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [selectedSessionId, setselectedSessionId] = useState("");

  const showModalToggle = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <AppContext.Provider
      value={{
        showModal,
        showModalToggle,
        selectCoach,
        setSelectCoach,
        sessionId,
        setSessionId,
        selectedSessionId,
        setselectedSessionId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };

export default AppContext;
