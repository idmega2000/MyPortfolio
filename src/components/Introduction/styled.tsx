import styled from 'styled-components';


export const IntrouductionWrapper = styled('div')`
margin-top: 50vh;
display: flex;
justify-content: center;
flex: 1 1 0;
`;

export const InnerIntrouductionWrapper = styled('div')`
  position: fixed;
  width:inherit;
  @media (max-width: 758px) {
    position: relative;
  }
`;

export const NameIntro = styled('h1')`
    font-size: 50px;
    font-weight: 900;
`
export const DetailedIntro = styled('p')`
  size: 10px;
  font-size: 30px;
  margin: 60px;
  margin-right: 80px;
  line-height: 200%;
`


export const TagIntro = styled('p')`
  size: 10px;
  margin-top: 20px;
  font-style: italic;
  display: flex;
  justify-content: center;
`