import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/category.reducer";
import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: categoriesReducer,
});
