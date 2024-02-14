import { useEffect, useState } from 'react';
import './App.css';

function App({message="You message", className, timeout=2000}) {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    const clearTime = setTimeout(() => {
        setIsShow(false);
    }, timeout);
    return () => clearTimeout(clearTime);
  }, [timeout])
  return (
    isShow ?
    <div onClick={() => setIsShow(false)} className={`cursor-pointer fixed bottom-5 left-5 p-3 rounded-md bg-dark text-white ${className}`}>
      {message}
    </div>
    :
    null
  );
}

export default App;
