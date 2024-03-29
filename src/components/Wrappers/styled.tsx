import styled from 'styled-components';

export const HomeWrapper = styled('div')`
  display: flex;
  // flex: 1;

  @media (max-width: 758px) {
    flex-direction: column;
  }
`;


export const AchievmentWrapper = styled('div')`
flex: 1 1 0;
  // width: 0;
  margin-top: 140px;
`;
export const ComponentWrapperWithTitle = styled('p')`
  margin-bottom: 5px;
  font-weight: 800;
  margin-left: 20px;
  font-size: 35px;
`;

export const ExperienceWrapper = styled('div')`
  text-decoration: none;
  color: inherit;
`;