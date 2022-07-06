export type TPosition = {
	id: number,
	company: string,
	logo: string,
	isNew: boolean,
	featured: boolean,
	position: string,
	role: string,
	level: string,
	postedAt: string,
	contract: string,
	location: string,
	languages: string[],
	tools: string[]
}

export const enum PositionActions{
	addPosition = 'ADD_POSITION',
	loadPosition = 'LOAD_POSITION',
}

export type TPositionState = TPosition[]
export type TPositionAction = {
	type: PositionActions,
	payload: {
		positions: TPositionState
	}
}
export type TPositionReducer = (
	state: TPositionState,
	action: TPositionAction
) => TPositionState

export type TAppState = {
	positions: TPositionState,
	filters: TFilterState
}

export const enum FilterActions{
	addFilter = 'ADD_FILTER',
	removeFilter = 'REMOVE_FILTER',
	clearFilter = 'CLEAR_FILTER',
}

export type TFilterState = string[]
export type TFilterAction = {
	type: FilterActions,
	payload: {
		filters: TFilterState
	}
}

export type TFilterReducer = (
	state: TFilterState,
	action: TFilterAction
) => TFilterState
