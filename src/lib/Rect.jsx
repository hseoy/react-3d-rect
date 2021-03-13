import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import S from './Rect.css';

const Rect = ({
  children,
  index,
  size,
  transition,
  emptyBgColor,
  emptyBdColor,
}) => {
  const emptyFace = useCallback(
    id => (
      <S.RectFaceEmpty key={id} bgColor={emptyBgColor} bdColor={emptyBdColor}>
        Empty
      </S.RectFaceEmpty>
    ),
    [emptyBgColor, emptyBdColor],
  );

  const rectFaces = useMemo(() => {
    let faces = [];
    if (children) {
      faces = Array.isArray(children) ? [...children].slice(0, 4) : [children];
    }
    for (let i = 0; faces.length < 4; i += 1) {
      faces.push(emptyFace(i));
    }
    return faces;
  }, [children]);

  return (
    <S.Scene size={size}>
      <S.Rect
        front={index === 'front'}
        right={index === 'right'}
        back={index === 'back'}
        left={index === 'left'}
        size={size}
        transition={transition}
      >
        <S.RectFace front size={size}>
          {rectFaces[0]}
        </S.RectFace>
        <S.RectFace right size={size}>
          {rectFaces[1]}
        </S.RectFace>
        <S.RectFace back size={size}>
          {rectFaces[2]}
        </S.RectFace>
        <S.RectFace left size={size}>
          {rectFaces[3]}
        </S.RectFace>
      </S.Rect>
    </S.Scene>
  );
};

Rect.propTypes = {
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

Rect.defaultProps = {
  children: null,
  index: 'front',
  size: 500,
  transition: 1,
  emptyBgColor: '#fff',
  emptyBdColor: '#000',
};

export default Rect;
