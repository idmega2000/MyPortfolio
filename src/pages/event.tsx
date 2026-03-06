import Link from 'next/link';
import styled from 'styled-components';

const SuccessWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  margin-top: 60px;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors?.green_main || '#00e8bb'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: inherit;
`;

const Message = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 32px;
  text-align: center;
`;

const BackLink = styled(Link)`
  padding: 12px 24px;
  background: ${({ theme }) => theme.colors?.green_main || '#00e8bb'};
  color: ${({ theme }) => theme.colors?.black_woodsmoke || '#131415'};
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Event = () => (
  <SuccessWrapper>
    <SuccessIcon>✓</SuccessIcon>
    <Title>Success!</Title>
    <Message>Your event has been submitted successfully.</Message>
    <BackLink href="/">Back to Home</BackLink>
  </SuccessWrapper>
);

export default Event;
