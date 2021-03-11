import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10vh;
  box-sizing: border-box;
`;

const TitleWrap = styled.h2`
  text-align: center;
  padding: 20px 0;
  position: relative;
  border-bottom: 3px dashed '#000';
`;

const Title = styled.span`
  fotn-size: 25px;
  padding-bottom: 10px;
`;

const SquareWrap = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  padding: 30px 40px 0 40px;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
`;

const SquareContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #000;
  box-sizing: border-box;
`;

const PrevNextButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 16px;
  color: '#000';
  font-weight: 28px;
  transition: 0.6s;
  border-radius: 0 3px 3px 0;
`;

const PrevButton = styled(PrevNextButton)`
  left: 0;
`;

const NextButton = styled(PrevNextButton)`
  right: 0;
  border-radius: 3px 0 0 3px;
`;

const DotsWrap = styled.div`
  text-align: center;
  padding: 30px;
`;

const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  background-color: ${props => (props.active ? '#1e1e1e' : '#bbb')};
`;

const AuthorMarkLeftArrow = styled.span`
  display: inline-block;
  width: 0px;
  height: 0px;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-right: 25px solid #0e0e0e;
  border-left: 25px solid transparent;
  transition: 0.15s;
`;
const AuthorMarkName = styled.span`
  background-color: #0e0e0e;
  height: 50px;
  padding: 0 2rem;
  display: inline-flex;
  align-items: center;
  transition: 0.15s;
`;
const AuthorMark = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #eee;

  &:hover {
    ${AuthorMarkLeftArrow} {
      border-right: 25px solid #aa1e1e;
    }
    ${AuthorMarkName} {
      background-color: #aa1e1e;
    }
  }
`;

const AuthorMarkWrap = styled.footer`
  position: fixed;
  display: inline;
  bottom: 3rem;
  right: 0;

  @media screen and (max-height: 500px) {
    & {
      display: none;
    }
  }
`;

export default {
  Wrap,
  TitleWrap,
  Title,
  SquareWrap,
  SquareContent,
  PrevButton,
  NextButton,
  DotsWrap,
  Dot,
  AuthorMarkLeftArrow,
  AuthorMarkName,
  AuthorMark,
  AuthorMarkWrap,
};
