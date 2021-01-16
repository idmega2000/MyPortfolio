import styled from 'styled-components';


export const GeneralCardWrapper = styled('div')`
    width: 80%;
    height: 160px;
    border-radius: 3px;
    cursor: pointer;
    background-color: #F8F8F8;
    margin-left: 20px;
    margin-top: 30px;
    box-shadow: 0 4px 10px -10px; 
    &:hover {
        transform: scale(1.1);
        transition-duration: 0.3s;
      }
`;


export const InternalCardWrapper = styled('div')`
    cursor: pointer;
    padding: 20px;
`;
export const NameTag = styled('p')`
    font-size: 16px;
    padding: 10px 0 0 10px;
`;
export const InfoName = styled('p')`
      font-weight: 900;
      font-size: 20px;
      padding: 10px 0 0 10px;
`;
