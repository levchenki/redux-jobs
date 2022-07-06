import {TAppState} from '../../types';

export const selectAllPositions = (state: TAppState) => state.positions
export const selectVisiblePositions = (state: TAppState) => {
	if (state.filters.length === 0 ) return state.positions;

	return state.positions.filter(pos => {
		const posFilters = [pos.role, pos.level, ...pos.languages, ...pos.tools]
		return state.filters.every(filter => posFilters.includes(filter))
	})
}
