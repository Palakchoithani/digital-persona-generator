import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import "../styles/variables.css";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/components.css";

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
