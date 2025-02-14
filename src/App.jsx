// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// export default function App() {
//   const date = new Date()

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
// 		<p>
//           {date.getFullYear()}
//         </p>
//       </div>
//     </>
//   )
// }





// import logo from './assets/react.svg';
// import './App.css';

// export const App = () => {
// 	const date = new Date()
// 	return   (
// 		<div className="App">
// 			<header className="App-header">
// 				 <img src={logo} className="App-logo" alt="logo" />{/*ddfdf */}
// 				<p></p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>
//            {date.getFullYear()}
//          </p>
// 			</header>
// 		</div>
// 	);
// };
import './App.css';
import { createElement } from 'react';
import logo from './assets/react.svg';

function createDate() {
	const date = new Date()
  return createElement(
    'div',   // все что дальше в функции это императивный подход
    { className: 'App' },

    createElement('img',
		{src : logo, className:'App-logo' },
	),
	createElement('p'),
	createElement('a',
			{href : 'https://reactjs.org', className:'App-link'},"Learn React"),
			createElement('p',{},date.getFullYear()),
  );
}

export default function App() { //декларативный подход
  return createElement(
    createDate

  );
}

