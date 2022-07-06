import React from 'react';
import JobPosition from './JobPosition';
import {useDispatch, useSelector} from 'react-redux';
import {selectVisiblePositions} from '../store/positions/positionSelectors';
import {addFilter} from '../store/filters/filterActions';
import {TAppState, TFilterState} from '../types';

const JobList: React.FC = () => {
	const positions = useSelector((state: TAppState) => selectVisiblePositions(state))
	const dispatch = useDispatch();
	
	const handleAddFilter = (filter: TFilterState) => {
		dispatch(addFilter(filter))
	}
	
	return (
		<div className="job-list">
			{positions.map(item => (
					<JobPosition key={item.id} item={item} handleAddFilter={handleAddFilter}/>
			))}
		</div>
	)
};

export default JobList;