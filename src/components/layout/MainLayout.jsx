import Header from "./Header";

function MainLayout({ children }) {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
