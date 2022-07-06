import {PositionActions, TPositionReducer, TPositionState} from '../../types';

const initialState: TPositionState = []
export const positionReducer: TPositionReducer = (state = initialState, action) => {
	switch (action.type) {
		case PositionActions.addPosition: {
			return [...state, ...action.payload.positions]
		}
		case PositionActions.loadPosition: {
			return action.payload.positions
		}
		
		default:
			return state
	}
}