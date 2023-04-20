import {configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers";

// export const store = createStore(reducers, {}, applyMiddleware(thunk));
//
export const store = configureStore({
  reducer: reducers
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export const store = configureStore({
//   reducer: reducers,
// });
