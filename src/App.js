import { useState, useEffect } from 'react';
import './App.css';
import SimpleTextArea from './components/SimpleTextArea';

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [equal, setEqual] = useState(false);

  useEffect(() => {
    if(text1 === text2){
      setEqual(true);
    } else {
      setEqual(false);
    }
  }, [text1, text2])


  return (
    <div className="App">
      <div className='TextAreas'>
        <SimpleTextArea text={text1} onChangeValue={(value) => setText1(value)}/>
        <SimpleTextArea text={text2} onChangeValue={(value)=> setText2(value)}/>
      </div>
      <div className='ResultText'>
        {equal?'Is Same':'Not Same'}
      </div>
    </div>
  );
}

export default App;
