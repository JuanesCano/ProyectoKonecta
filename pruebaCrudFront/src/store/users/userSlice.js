import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    isLoading: false,
}

export const registerUser = createAsyncThunk('userSlice/registerUser', 
    async (arg, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://pruebacrud.onrender.com/user/register", arg);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Error desconocido");
        }
    }
);

export const loginUser = createAsyncThunk('userSlice/loginUser', 
    async (arg, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://pruebacrud.onrender.com/user/login", arg);
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Error desconocido");
        }
    }
);

const userSlice = createSlice ({
    name: "userSlice",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false;
        })

        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false;
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })
    }
});

export default userSlice.reducer;