import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface Post {
	data:any[]
}

const PaginationSlice = createSlice({
	name:'data',
	initialState:{
		data : []
	} as Post,
	reducers:{
		addData:(state,action:PayloadAction<any>) =>{
			return {
				...state,
				data:state.data.concat(action.payload.hits)
			}
		}
	}
})

export const {addData} = PaginationSlice.actions

export const fetchData =(state:any) => state.data.data

export default PaginationSlice