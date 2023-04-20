import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreators} from '.';
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector` and `useActions`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

