import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// slices
import authSlice from './slices/authSlice';

const reducer = {
    authSlice
}

const store = configureStore({
    reducer,
    devTools: true
})

type Appdispatch = typeof store.dispatch;

type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<Appdispatch>()
export const useAppSelection: TypedUseSelectorHook<RootState> = useSelector;

export default store;