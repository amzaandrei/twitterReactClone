import React from 'react';
import SideBar from './SideBarComponent/Sidebar'
import FeedPage from './FeedComponent/FeedPage'
import './App.css';
import Widget from './WidgetComponent/Widget';

function App() {
  return (
    <div className="app">
      <SideBar />
      <FeedPage />
      <Widget />
    </div>
  );
}

export default App;
