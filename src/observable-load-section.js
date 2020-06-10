import React, { useEffect, useState } from 'react';
import Spinner from './spinner';

const ObservableLoadSection = ({ id, children }) => {
  const [visible, setVisible] = useState(false);
  let intObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        console.log(entry);
        setTimeout(() => removeObserver(entry), 400)
      }
    });
  });

  const getElement = () => document.querySelector(`#${id}`);

  const removeObserver = () => {
    console.log('load data', id)
    intObserver.unobserve(getElement());
    setVisible(true);
  }

  useEffect(() => {
    intObserver.observe(getElement());
  }, []);

  return (
    <div id={id}>
      { visible ? children : <Spinner /> }
    </div>
  );
};

export default ObservableLoadSection;