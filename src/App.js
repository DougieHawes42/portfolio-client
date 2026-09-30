import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  PrivateRoute,
  PublicRoute,
  AuthRoute,
} from "./components/utils/routes.js";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import "./assets/styles/style.scss";

import Header from "./components/layout/Header.js";
import DarkModeToggle from "./components/layout/DarkModeToggle.js";

import Home from "./components/routes/public/Home.js";
import Work from "./components/routes/public/Work.js";
import Skills from "./components/routes/public/Skills.js";
import Contact from "./components/routes/public/Contact.js";
import Blog from "./components/routes/public/Blog.js";

import BlogItem from "./components/routes/public/BlogItem.js";
import WorkItem from "./components/routes/public/WorkItem.js";

import Login from "./components/routes/auth/Login.js";

import Dashboard from "./components/routes/private/Dashboard.js";

const App = () => {
  const [darkmodeOn, setDarkmodeOn] = useState(false);

  return (
    <div className={`app ${darkmodeOn ? "darkmode" : "lightmode"}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* item routes */}
        <Route path="/work/:id" element={<WorkItem />} />
        <Route path="/blog/:id" element={<BlogItem />} />
        {/* auth routes */}
        <Route element={<AuthRoute />}>
          <Route
            path={`${process.env.REACT_APP_PRIVATE_ROUTE}/login`}
            element={<Login />}
          />
        </Route>
        {/* private routes */}
        <Route element={<PrivateRoute />}>
          <Route
            path={`${process.env.REACT_APP_PRIVATE_ROUTE}/dashboard`}
            element={<Dashboard />}
          />
        </Route>
      </Routes>
      <DarkModeToggle
        onClick={() => setDarkmodeOn(!darkmodeOn)}
        icon={darkmodeOn ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      />
    </div>
  );
};

export default App;
