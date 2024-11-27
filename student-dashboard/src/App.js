import React from "react";
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/permissions" element={<Permissions />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
