import logo from './logo.svg';
import './App.css';
// import ClassCounter from './components/useState/ClassCounter'
// import HookCounter from './components/useState/HookCounter'
// import HookCounterTwo from './components/useState/HookCounterTwo'
// import HookCounterThree from './components/useState/HookCounterThree'
// import HookCounterFour from './components/useState/HookCounterFour'
// import ClassCounterOne from './components/useEffect/ClassCounterOne'
// import HookCounterOne from './components/useEffect/HookCounterOne'
// import HookCounterTwo from './components/useEffect/HookCounterTwo'
// import HookMouse from './components/useEffect/HookMouse'
// import WithCleanUp from './components/useEffect/WithCleanUp'
import IntervalHookCounter from './components/useEffect/IntervalHookCounter'

function App() {
  return (
    <div className="App">
      <IntervalHookCounter />
    </div>
  );
}

export default App;
