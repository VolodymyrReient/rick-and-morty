const initialState = { data: [{ name: "", mail: "", gender: "", image: "" }] };

const heroReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_HERO":
            return { ...state, data: [...state.data, action.payload] };
        default:
            return { ...state };
    }
};

export default heroReducer;
