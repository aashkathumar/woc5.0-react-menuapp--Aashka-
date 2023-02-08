import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Navbar } from './components/Navbar';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      {/* <Navbar /> */}
      <div className="App">
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
      </div>
      <section className="menu section">
        <div className="title">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h2>Foodie's Network Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
    
  );
  
};

export default App;