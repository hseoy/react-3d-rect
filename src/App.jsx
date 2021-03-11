import React, { useState } from 'react';
import Square from 'lib/Square';
import S from './App.css';

const SquareDemo = () => {
  const [currentFace, setCurrentFace] = useState(0);
  const faces = ['face', 'right', 'back', 'left'];

  const nextSlide = () => {
    setCurrentFace((currentFace + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentFace(currentFace - 1 >= 0 ? currentFace - 1 : 3);
  };

  const setSlideIndex = num => () => {
    setCurrentFace(num % 4);
  };

  return (
    <S.Wrap>
      <S.TitleWrap>
        <S.Title>Square Demo</S.Title>
      </S.TitleWrap>

      <S.SquareWrap>
        <Square index={faces[currentFace]} transition={0.5}>
          <S.SquareContent>FRONT</S.SquareContent>
          <S.SquareContent>RIGHT</S.SquareContent>
          <S.SquareContent>BACK</S.SquareContent>
          <S.SquareContent>LEFT</S.SquareContent>
        </Square>
        <S.PrevButton onClick={prevSlide}>&#10094;</S.PrevButton>
        <S.NextButton onClick={nextSlide}>&#10095;</S.NextButton>
      </S.SquareWrap>

      <S.DotsWrap>
        <S.Dot active={currentFace === 0} onClick={setSlideIndex(0)} />
        <S.Dot active={currentFace === 1} onClick={setSlideIndex(1)} />
        <S.Dot active={currentFace === 2} onClick={setSlideIndex(2)} />
        <S.Dot active={currentFace === 3} onClick={setSlideIndex(3)} />
      </S.DotsWrap>

      <S.AuthorMarkWrap>
        <S.AuthorMark
          target="_blank"
          rel="noreferrer"
          href="https://github.com/hseoy/react-3d-square"
        >
          <S.AuthorMarkLeftArrow />
          <S.AuthorMarkName>Yunseo Hwang</S.AuthorMarkName>
        </S.AuthorMark>
      </S.AuthorMarkWrap>
    </S.Wrap>
  );
};

export default SquareDemo;
