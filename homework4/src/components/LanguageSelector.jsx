import React, { memo } from 'react';

// not working: memo(({ languages, selectedLanguageIndex, onSelect }) => {})
const LanguageSelector = ({ languages, selectedLanguageIndex, onSelect }) => {
  return (
    <ul className='languages'>
      {languages.map((language, index) => (
        <li
          key={index}
          style={{ color: index === selectedLanguageIndex ? '#d0021b' : '#000000' }}
          onClick={() => onSelect(index)}
        >
          {language}
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelector;