import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    
    <header >        
    <Link to="/Form">
          <h1>Form</h1>
        </Link>
        <Link to="/CommentSection">
          <h1>Form</h1>
        </Link>
      </header>

    
  );
};

export default Home;