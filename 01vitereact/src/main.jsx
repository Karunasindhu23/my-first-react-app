import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function MyApp() {
  return (
    <div>
      <h2>Custom App !</h2>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click here to visit Google",
// };

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google'
)

const AnotherElement = (
  <a href="https://google.com" target='_blanl'>Visit google</a>
)

createRoot(document.getElementById('root')).render(
    reactElement
)
