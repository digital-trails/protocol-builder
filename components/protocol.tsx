import { createContext, useContext, useReducer } from 'react';

const defaultProtocol = {
    "home": {
        "title": "Title",
        "flavors": ["flavor1","flavor2"],
        "sessions": false,
        "buttons": [
            ["button1", "", ""],
            ["button2", "", ""],
            ["button3", "", ""],
            ["button4", "", ""]
        ],
        "sidebar": [],
    }
}

const ProtocolContext = createContext({"state":defaultProtocol, "dispatch":((action:any) => {})});

function ProtocolReducer(protocol:any, action:any) {
    protocol = {...protocol}

    if (action.type == 'home') {
        protocol.home = action.value
    }

    return protocol
}

export const ProtocolProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(ProtocolReducer, defaultProtocol);
  
    return (
      <ProtocolContext.Provider value={{ state, dispatch }}>
        {children}
      </ProtocolContext.Provider>
    );
  };

export const useProtocolContext = () => useContext(ProtocolContext);