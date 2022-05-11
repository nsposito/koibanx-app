import { configureStore } from '@reduxjs/toolkit';
import commerce from './slices/commerceSlice';

export default configureStore({
	reducer: { commerce },
});
