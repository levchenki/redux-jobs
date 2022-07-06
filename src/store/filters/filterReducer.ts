import {FilterActions, TFilterReducer, TFilterState} from '../../types';

const initialState: TFilterState = []
export const filterReducer: TFilterReducer = (state = initialState, action) => {
	switch (action.type) {
		case FilterActions.addFilter: {
			if (state.includes(action.payload.filters[0])){
				return state
			}
			
			return [...state, ...action.payload.filters]
		}
		case FilterActions.removeFilter: {
			return state.filter(item => !action.payload?.filters.includes(item))
		}
		case FilterActions.clearFilter: {
			return action.payload.filters;
		}
		default:
			return state
	}
}