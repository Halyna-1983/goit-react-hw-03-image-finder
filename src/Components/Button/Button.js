// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться 
// вместе с предыдущими. После загрузки и рендера новой партии изображений страница должна плавно 
// скролиться. Для скрола используй следующий код.
// Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. 
// Если массив изображений пуст, кнопка не рендерится.

import React from 'react';

const Button = ({ children, onClick, ...allyProps }) => (
    <div className="ButtonTmp">
      <button type="button" className="Button" onClick={onClick} {...allyProps}>
        {children}
      </button>
    </div>
  );

export default Button;

