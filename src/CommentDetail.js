import React from 'react';

const CommentDetail = ({avatar, name, comment, timeAgo}) => {
	return(

			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={avatar}/>
				</a>
				<div className="content">
					<a href="/" className="author">
						{name}
					</a>
					<div className="metadata">
						<span className="date">{timeAgo}</span>
					</div>
					<div className="text" >{comment}</div>
				</div>
			</div>

	);
};

export default CommentDetail;