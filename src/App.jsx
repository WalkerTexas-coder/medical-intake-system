import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Teligant AI Medical Intake</h1>
      </header>
      <main className="app-main">
        <div 
          data-tf-live="01JEWEGD7HHERS16BYYXJP4JH8"
          style={{ 
            height: '600px',
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        ></div>
      </main>
    </div>
  );
}

export default App;