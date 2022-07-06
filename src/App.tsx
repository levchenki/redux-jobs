import React, {useEffect} from 'react';
import TheHeader from './components/TheHeader';
import FilterPanel from './components/FilterPanel';
import JobList from './components/JobList';
import {useDispatch} from 'react-redux';
import data from './mock/data.json'
import {loadPositions} from './store/positions/positionActions';

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadPositions(data))
	}, [])
	
	return (
		<>
			<TheHeader/>
			<div className="container">
				<FilterPanel/>
				<JobList/>
			</div>
		</>
	);
}

export default App;
