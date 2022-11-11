import Topbar from './Topbar';

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
};

export default Layout;
