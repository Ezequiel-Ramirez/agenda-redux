export const ContactosReducer = (state =[], action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter(contacto => contacto.id !== action.payload.id);
            
        default:
            return state;
    }
}
