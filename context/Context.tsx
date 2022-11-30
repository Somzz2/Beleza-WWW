import { createContext, useReducer } from 'react';
import {CardType, cardInitialState, cardReducer} from '../reducers/cardReducer';
import { reducerActionType } from '../types/reducerActionType';

interface Props {
    children: React.ReactNode;
}

type initialStateType = {
    card: CardType;
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>;
}

const initialState = {
    card: cardInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    card: cardReducer(state.card, action)
})

export const ContextProvider: React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);


    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}