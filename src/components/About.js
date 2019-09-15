import React from 'react';

export const About = ({ name }) => {
  return (
    <div className="contacts">
      <p>Hello! My name is Nickolai Chernyi.</p>
      <img className="avatar" src="https://avatars0.githubusercontent.com/u/52567098?s=400" alt="avatar"></img>

      <div><a href="https://github.com/TommyCargo" target="_blank" rel="noopener noreferrer">GitHub</a></div>
      <div><a href="https://stackblitz.com/@TommyCargo" target="_blank" rel="noopener noreferrer">Stackblitz.com</a></div>
    </div>
  )
};