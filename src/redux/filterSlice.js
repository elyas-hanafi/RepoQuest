// githubDataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGitHubData = createAsyncThunk(
  'githubData/fetchGitHubData',
  async ({ technology, language }, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${technology}+language:${language}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
          },
        }
      );
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const githubFilterSlice = createSlice({
  name: 'githubData',
  initialState: {
    repositories: [],
    technologyFilter: '',
    languageFilter: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setTechnologyFilter: (state, action) => {
      state.technologyFilter = action.payload;
    },
    setLanguageFilter: (state, action) => {
      state.languageFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGitHubData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.repositories = action.payload;
      })
      .addCase(fetchGitHubData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setTechnologyFilter, setLanguageFilter } =
  githubFilterSlice.actions;

export default githubFilterSlice.reducer;
