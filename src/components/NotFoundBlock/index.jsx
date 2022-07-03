import React from 'react';
import s from './style.module.scss';

export const NotFoundBlock = ({title, subtitle}) => {
  return (
    <div className={s.root}>
      <h1>
        <span>😕</span>
        <br />
        {title}
      </h1>
      <p>{subtitle}</p>
    </div>
  );
};
