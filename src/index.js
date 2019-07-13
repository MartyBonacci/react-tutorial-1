import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail name='Fred'/>
			<CommentDetail name='Bob'/>
			<CommentDetail name='Sue'/>
			<CommentDetail name='Mary'/>
			<CommentDetail name='Sam'/>
		</div>
	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));
