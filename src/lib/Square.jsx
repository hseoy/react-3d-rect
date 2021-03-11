import React from 'react';
import PropTypes from 'prop-types';
import S from './Square.css';

const Square = ({
  children,
  index,
  size,
  transition,
  emptyBgColor,
  emptyBdColor,
}) => {
  let squareFaces = [];
  const emptyFace = id => (
    <S.SquareFaceEmpty key={id} bgColor={emptyBgColor} bdColor={emptyBdColor}>
      Empty
    </S.SquareFaceEmpty>
  );

  if (children) {
    squareFaces = Array.isArray(children)
      ? [...children].slice(0, 4)
      : [children];
  }

  for (let i = 0; squareFaces.length < 4; i += 1) {
    squareFaces.push(emptyFace(i));
  }

  return (
    <S.Scene size={size}>
      <S.Square
        front={index === 'front'}
        right={index === 'right'}
        back={index === 'back'}
        left={index === 'left'}
        size={size}
        transition={transition}
      >
        <S.SquareFace front size={size}>
          {squareFaces[0]}
        </S.SquareFace>
        <S.SquareFace right size={size}>
          {squareFaces[1]}
        </S.SquareFace>
        <S.SquareFace back size={size}>
          {squareFaces[2]}
        </S.SquareFace>
        <S.SquareFace left size={size}>
          {squareFaces[3]}
        </S.SquareFace>
      </S.Square>
    </S.Scene>
  );
};

Square.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  index: PropTypes.string,
  size: PropTypes.number,
  transition: PropTypes.number,
  emptyBgColor: PropTypes.string,
  emptyBdColor: PropTypes.string,
};

Square.defaultProps = {
  children: undefined,
  index: 'front',
  size: 500,
  transition: 1,
  emptyBgColor: '#fff',
  emptyBdColor: '#000',
};

export default Square;
