import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <p className="copyright">&copy; {currentYear} Shashi Awari. All rights reserved.</p>
  );
};

export default Copyright;
