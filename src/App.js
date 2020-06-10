import React from 'react';
import data from './data';
import ObservableLoadSection from './observable-load-section';

const Post = ({ id, title, body, img }) => {
  return (
    <div className='post'>
      <div className='post-img'>
        <img src={`https://picsum.photos/id/${id}/200/200`} alt='...' />
      </div>
      <div className='post-body'>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className='App'>
      <h2>LazyLoad Demo</h2>
      <div className='post-container'>
        {data.map(post => {
          const initial = post.id < 5;
          return (
            <div>
              {
                initial
                ? <Post key={post.id} {...post} />
                : (
                  <ObservableLoadSection id={`post_${post.id}`}>
                    <Post key={post.id} {...post} />
                  </ObservableLoadSection>
                )
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
