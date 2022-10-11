import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { User } from '../../interfaces'
import { fetchUsers } from './userAPI'

export interface UserState {
	loading: boolean
	users: User[]
}

const initialState: UserState = {
	loading: false,
	users: []
}

export const fetchUsersAsync = createAsyncThunk(
	'users/fetchUsers',
	async ({limit, page}: {limit?: number, page?: number} = {}) => {
		const response = await fetchUsers({limit, page})
		return response.data.results
	}
)

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsersAsync.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchUsersAsync.fulfilled, (state, action) => {
				state.loading = false
				state.users = state.users.concat(action.payload)
			})
			.addCase(fetchUsersAsync.rejected, (state) => {
				state.loading = false
			})
	},
})

export const getUsers = (state: RootState) => state.user.users

export default userSlice.reducer
