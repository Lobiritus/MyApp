import React, { useState } from 'react'

function App() {

  const [newText, setNewText] = useState('');
  const dictionary = new Map();
  dictionary.set('т.д.', 'так далее')
  .set('т.п.','тому подобное')
  .set('т.е.','то есть')
  .set('т.', 'то');
  

  const fold = srcText => {
    const foldedText = [];
    const splitText = srcText.split(' ');
    
    splitText.forEach(word => dictionary.has(word) ? foldedText.push(dictionary.get(word)) : foldedText.push(word));
    return foldedText;
  }

  return (
    <div>
      <input type="text" onChange={e => setNewText(fold(e.target.value).join(' '))}/>
      <br/>
      <p>{newText}</p>
    </div>
  );
}

export default App;
