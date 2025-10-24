import React from 'react';

const Comments = async () => {
    await new Promise(resolve => setTimeout(resolve, 9000));

  return (
    <div>
        <p>10k Comments</p>
    </div>
  );
}

export default Comments;
