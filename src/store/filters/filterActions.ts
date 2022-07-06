import {FilterActions, TFilterAction, TFilterState} from '../../types';


export const addFilter = (filter: TFilterState): TFilterAction => ({
	type: FilterActions.addFilter,
	payload: {
		filters: filter
	}
})

export const removeFilter = (filter: TFilterState): TFilterAction => ({
	type: FilterActions.removeFilter,
	payload: {
		filters: filter
	}
})

export const clearFilter = ():TFilterAction => ({
	type: FilterActions.clearFilter,
	payload: {
		filters: []
	}
})