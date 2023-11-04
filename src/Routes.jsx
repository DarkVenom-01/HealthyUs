import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const Components = React.lazy(() => import("pages/Components"));
const Typography = React.lazy(() => import("pages/Typography"));
const MainPageEleven = React.lazy(() => import("pages/MainPageEleven"));
const MainPageTwelve = React.lazy(() => import("pages/MainPageTwelve"));
const MainPageThirteen = React.lazy(() => import("pages/MainPageThirteen"));
const MainPageSeven = React.lazy(() => import("pages/MainPageSeven"));
const MainPageFour = React.lazy(() => import("pages/MainPageFour"));
const MainPageTen = React.lazy(() => import("pages/MainPageTen"));
const MainPageEight = React.lazy(() => import("pages/MainPageEight"));
const MainPageTwo = React.lazy(() => import("pages/MainPageTwo"));
const MainPageThree = React.lazy(() => import("pages/MainPageThree"));
const MainPageNine = React.lazy(() => import("pages/MainPageNine"));
const MainPage = React.lazy(() => import("pages/MainPage"));
const MainPageSix = React.lazy(() => import("pages/MainPageSix"));
const MainPageFive = React.lazy(() => import("pages/MainPageFive"));
const MainPageOne = React.lazy(() => import("pages/MainPageOne"));
const LandingNew = React.lazy(() => import("pages/LandingNew"));
const BMI = React.lazy(() => import("pages/BMI"));
const Registerlight = React.lazy(() => import("pages/Registerlight"));
const Loginlight = React.lazy(() => import("pages/Loginlight"));
const Loader = React.lazy(() => import("pages/Loader"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginlight" element={<Loginlight />} />
          <Route path="/registerlight" element={<Registerlight />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/landingnew" element={<LandingNew />} />
          <Route path="/mainpageone" element={<MainPageOne />} />
          <Route path="/mainpagefive" element={<MainPageFive />} />
          <Route path="/mainpagesix" element={<MainPageSix />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/mainpagenine" element={<MainPageNine />} />
          <Route path="/mainpagethree" element={<MainPageThree />} />
          <Route path="/mainpagetwo" element={<MainPageTwo />} />
          <Route path="/mainpageeight" element={<MainPageEight />} />
          <Route path="/mainpageten" element={<MainPageTen />} />
          <Route path="/mainpagefour" element={<MainPageFour />} />
          <Route path="/mainpageseven" element={<MainPageSeven />} />
          <Route path="/mainpagethirteen" element={<MainPageThirteen />} />
          <Route path="/mainpagetwelve" element={<MainPageTwelve />} />
          <Route path="/mainpageeleven" element={<MainPageEleven />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/components" element={<Components />} />
          <Route path="/frametwo" element={<FrameTwo />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
