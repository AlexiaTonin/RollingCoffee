import { Route, Routes, useLocation } from "react-router-dom";

const MyRoutes = () => {
  const redirect = useLocation();

  return (
    <>
      {redirect.pathname !== "/" && (
        <Header />
      )}
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homePage" element={<HomePage />} />
      </Routes>
      {redirect.pathname !== "/" && <Footer />}
    </>
  );
};

export default MyRoutes;