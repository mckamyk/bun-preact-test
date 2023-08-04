import {useEffect} from 'react';
import ReactDOM from 'react-dom';

export const Test = () => {
	useEffect(() => {
		console.log('test');
	}, []);
	return <div>test</div>;
}