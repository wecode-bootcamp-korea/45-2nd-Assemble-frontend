import Header from "../Header/Header";
import MatchingNav from "../Nav/MatchingNav";
import Footer from "../Footer/Footer";

const MatchingLayout = props => {
  const { children } = props;
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <MatchingNav />
      <div style={{ flex: "1" }}>{children}</div>
      <Footer />
    </div>
  );
};
export default MatchingLayout;
