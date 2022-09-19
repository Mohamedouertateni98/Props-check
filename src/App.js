import "./App.css";
import Profile from "../src/profile/Profile";



function App() {

  const styleApp = {display:"flex",flexDirection:"column"}

  return (
    <div style={styleApp}>
      <Profile
      fullName="Mohamed Ouertateni"
      bio="Web Dev & Pro Gamer "
      profession="Back-end Web Dev"
      />
    </div>

    
  );
}

export default App;
