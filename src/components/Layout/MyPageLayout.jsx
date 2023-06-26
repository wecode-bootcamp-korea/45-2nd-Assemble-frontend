import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const MyPageLayout = props => {
  const { children } = props;
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ flex: "1", margin: "40px" }}>{children}</div>
      <Footer />
    </div>
  );
};
export default MyPageLayout;
