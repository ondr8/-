import './App.css';
import Header from './components/header/Header.js';
import Nav_bar from './components/nav-bar/Nav-bar.js';
import Profile from './components/profile/Profile.js';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Nav_bar />
      <Profile />
    </div>
  );
}

export default App;
