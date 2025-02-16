import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../encrypt/tokenService";

const initialState = {
    posts: [],
    isLoading: false
};

export const getPosts = createAsyncThunk('postsSlice/getPosts', async (arg, { rejectWithValue }) => {
    try {
        const token = getToken();
        const response = await axios.get("/post", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error desconocido");
    }
});

export const getPostforId = createAsyncThunk('postsSlice/getPostForId', async (postId, { rejectWithValue }) => {
    try {
        const token = getToken();
        const response = await axios.get(`/post/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error desconocido");
    }
})

export const getUserPosts = createAsyncThunk('postsSlice/getUserPosts', async (arg, { rejectWithValue }) => {
    try {
        const token = getToken();
        const response = await axios.get(`/post/getUserPost`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error desconocido");
    }
});

export const addPosts = createAsyncThunk('postsSlice/addPosts', async (formData, { rejectWithValue }) => {
    try {
        const token = getToken();
        const response = await axios.post(`/post/addPost`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error desconocido");
    }
})

export const updatePosts = createAsyncThunk('postsSlice/updatePosts', async ({ postId, updateData }, { rejectWithValue }) => {
    try {
        const token = getToken();
        const response = await axios.put(`/post/updatePost/${postId}`, updateData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error desconocido");
    }
});

export const deletePosts = createAsyncThunk('postsSlice/deletePosts', async (postId, { rejectWithValue }) => {
    try {
        const token = getToken();
        const response = await axios.delete(`/post/deletePost/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error desconocido");
    }
});

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = null
        })

        builder.addCase(getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(getUserPosts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getUserPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = null
        })

        builder.addCase(getUserPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(addPosts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(addPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = null
        })

        builder.addCase(addPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(getPostforId.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getPostforId.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = null
        })

        builder.addCase(getPostforId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(updatePosts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(updatePosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = null
        })

        builder.addCase(updatePosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(deletePosts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(deletePosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = null
        })
        builder.addCase(deletePosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })
    }
});

export default postSlice.reducer;