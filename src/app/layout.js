'use client';
import './globals.css';

export default function RootLayout({ children }) {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <html lang="en">
      <body>
        <header>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
          <button onClick={toggleDarkMode} style={{ marginLeft: 'auto', background: 'transparent', border: '1px solid white', color: 'white', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
            🌓 Toggle Dark Mode
          </button>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}