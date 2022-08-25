import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
   set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   },
   unset() {
      axios.defaults.headers.common.Authorization = '';
   },
}

export const register = createAsyncThunk('auth/register', async credentials => {
	try {
		const { data } = await axios.post('/users/signup', credentials);
		return data;
	} catch (error) {
		console.log(error.message);
	}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
	try {
		const { data } = await axios.post('/users/login', credentials);
		return data;
	} catch (error) {
		console.log(error.message);
	}
});

export const logOut = createAsyncThunk('auth/logout', async () => {
   try {
      await axios.post('/users/logout');
      toast.success(`Logout!`);
      token.unset();
   } catch (error) {}
});