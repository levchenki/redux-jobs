import {PositionActions, TPositionAction, TPositionState} from '../../types';

export const loadPositions = (positions: TPositionState): TPositionAction => ({
	type: PositionActions.loadPosition,
	payload: {
		positions: positions
	}
})


export const addPositions = (positions: TPositionState): TPositionAction => ({
	type: PositionActions.addPosition,
	payload: {
		positions: positions
	}
})
