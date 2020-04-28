import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
    return (
        <div className="main-container d-flex flex-column">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
