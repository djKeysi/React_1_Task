import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// в функции App это императивный подход , а в файле main.jsx это декларативный подход
export default function App() {
  const date = new Date()

  return (

 		   <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
		<p>
          {date.getFullYear()}
        </p>
      </div>
    </>
  )
}






// import './App.css';
// import { createElement } from 'react';
// import logo from './assets/react.svg';

// function createDate() {
// 	const date = new Date()
//   return createElement(
//     'div',   // все что дальше в функции это императивный подход
//     { className: 'App' },

//     createElement('img',
// 		{src : logo, className:'App-logo' },
// 	),
// 	createElement('p'),
// 	createElement('a',
// 			{href : 'https://reactjs.org', className:'App-link'},"Learn React"),
// 			createElement('p',{},date.getFullYear()),
//   );
// }

// export default function App() { //декларативный подход
//   return createElement(
//     createDate

//   );
// }

