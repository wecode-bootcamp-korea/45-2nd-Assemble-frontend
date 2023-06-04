import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const MainLayout = props => {
  const { children } = props;
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Nav />
      <div style={{ flex: "1" }}>{children}</div>
      <Footer />
    </div>
  );
};
export default MainLayout;
