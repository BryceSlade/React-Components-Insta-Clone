// import React from 'react';
// import Comment from './Comment';
// import './Comments.css';

// const Comments = props => {
//   // 🔥 Make sure the parent of Comments is passing the right props!
//   const { comments } = props;

//   return (
//     <div>
//       {comments.map = (comments => {
//         return <Comment comment={comments}/>
//       })}
//       {/* map through the comments prop and render a Comment for every piece of data */}
//     </div>
//   );
// };

// export default Comments;

import React from 'react';
import Comment from './Comment';
import './Comments.css';


const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {comments.map((coms) => {
        return <Comment comment ={coms} />;
      })};
    </div>
  );
};

export default Comments;