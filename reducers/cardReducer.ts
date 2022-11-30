import { reducerActionType } from "../types/reducerActionType";

export type CardType = {
    cardNumber: string;
    name: string;
    expiry: string;
    CVV: number;
}

export const cardInitialState: CardType = {
    cardNumber: '',
    name: '',
    expiry: '',
    CVV: 0
}

export const cardReducer = (state: CardType, action: reducerActionType) => {
    switch (action.type) {
        case 'NEW_CARD':
            return {...state, name: action.payload.name, cardNumber: action.payload.cardNumber, expiry: action.payload.expiry, CVV: action.payload.CVV}
            break;
    }

    return state
}