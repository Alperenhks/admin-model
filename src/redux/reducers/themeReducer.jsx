
import { lightTheme,darkTheme } from "../../theme/colors";
const initialState = {
    theme: "light",
    themeColors: lightTheme, 
};

const TOGGLE_THEME = "TOGGLE_THEME";
 

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            console.log(state.theme);
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
                themeColors: state.theme === "light" ? darkTheme : lightTheme,
            };
        default:
            return state;
    } 
};