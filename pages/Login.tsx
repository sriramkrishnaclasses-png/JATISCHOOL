import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy authentication
    if (username.length > 0 && password.length > 0) {
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin');
    } else {
      setError('Please enter any username and password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
            <LogIn />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-gray-500 text-sm">Jati International School CMS</p>
        </div>

        {error && <div className="bg-red-50 text-red-500 text-sm p-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-primary text-white py-2 rounded font-bold hover:bg-blue-800 transition"
          >
            Access Dashboard
          </button>
        </form>
        <div className="mt-6 text-center">
            <a href="/" className="text-sm text-gray-500 hover:underline">Back to Website</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
