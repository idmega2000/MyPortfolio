import styled from 'styled-components';

export const HeaderAnchor = styled('a')`
    color: inherit; 
    margin-right: 20px;
    margin-top: 10px;
    text-decoration: none;
    padding: 5px;
    & :hover {
        background-color: ${props => props.theme.colors.header_hover};
        border-radius: 2px;
      }
`;