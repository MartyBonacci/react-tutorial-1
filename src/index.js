import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from "./ApprovalCard";


const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
			<CommentDetail
				name={faker.name.firstName()}
				comment={faker.lorem.sentence()}
				timeAgo='today at 6:00pm'
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>

			<ApprovalCard>
			<CommentDetail
				name='Bob'
				comment='Favorite comment'
				timeAgo='yesterday at 3:30pm'
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>

			<ApprovalCard>
			<CommentDetail
				name='Sue'
				comment='Love this comment'
				timeAgo='today at 1:00pm'
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>

			<ApprovalCard>
			<CommentDetail
				name='Mary'
				comment='Awesome comment'
				timeAgo='yesterday at 2:30pm'
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>

			<ApprovalCard>
			<CommentDetail
				name='Sam'
				comment='Last comment'
				timeAgo='today at 6:15pm'
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>

		</div>
	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));
