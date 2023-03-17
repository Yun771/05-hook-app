// import './08-reducer/intro-reducer'

// import { Padre } from './07-tarea-memo/Padre'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultiCustomHooks } from './03-examles/MultiCustomHooks'
// import { FormCustomHouok } from './02-useEffect/FormCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormCustomHook } from './02-useEffect/SimpleFormCustomHook'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { TodoApp } from './08-reducer/TodoApp'
// import { MainApp } from './09-useContext/MainApp'
import ReactDOM from 'react-dom/client'



import './index.css'
import { router } from './09-useContext';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
  // {/* // <React.StrictMode> */}
  // {/* <MainApp /> */}
  // {/* // </React.StrictMode>, */}
)
