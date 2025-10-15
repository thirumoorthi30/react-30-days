import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import ProfileCard from './Components/ProfileCard';


function App() {
  const [selectedProject, setSelectedProject] = useState('profile');

  const profiles = [
    {
      name: "Thiru",
      role: "Frontend Developer",
      email: "thiru@example.com",
      phone: "123-456-7890",
    },
    {
      name: "Ram",
      role: "Backend Developer",
      email: "ram@example.com",
      phone: "123-456-7890",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <nav className="flex justify-center gap-6 bg-green-600 text-white py-3">
        <button
          onClick={() => setSelectedProject('profile')}
          className={`px-4 py-2 rounded-lg ${
            selectedProject === 'profile'
              ? 'bg-green-800'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          Profile Card Project
        </button>

        <button
          onClick={() => setSelectedProject('todo')}
          className={`px-4 py-2 rounded-lg ${
            selectedProject === 'todo'
              ? 'bg-green-800'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          To-Do List Project
        </button>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-100">
        {selectedProject === 'profile' && (
          <>
            
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {profiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
              ))}
            </div>
          </>
        )}

        {selectedProject === 'todo' && <Content />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
