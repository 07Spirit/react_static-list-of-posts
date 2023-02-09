import React from 'react';

import { Comment } from '../../types/Comments';

export const CommentInfo: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="CommentInfo" key={comment.postId}>
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
