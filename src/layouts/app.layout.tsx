import { Container, styled } from '@mui/material';
import { Footer, Header } from 'components';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import bgImage from '../assets/img/pattern.svg';

const Wrapper = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${bgImage})`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
});

const Content = styled(Container)({
  flexGrow: 1,
  paddingLeft: 0,
  paddingRight: 0,
});

type AppLayoutProps = {};
export const AppLayout: FC<AppLayoutProps> = () => {
  return (
    <Wrapper>
      <Header />
      <Content maxWidth="xl" sx={{ mt: '64px' }}>
        <Outlet />
      </Content>
      <Footer />
    </Wrapper>
  );
};
