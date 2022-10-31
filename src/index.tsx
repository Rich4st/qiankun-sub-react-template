import React from 'react'
import ReactDOM from 'react-dom/client'
import './public-path'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

declare const window: {
  __POWERED_BY_QIANKUN__: boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string
}

let root: ReactDOM.Root | null = null

function render(props: any = {}) {
  const { container } = props
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'))
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/sub' : '/'}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
  )
}

if (!window.__POWERED_BY_QIANKUN__)
  render({})

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props: any = {}) {
  console.log('[react16] props from main framework', props)
  render(props)
}

export async function unmount(props: any = {}) {
  const { container } = props
  console.log('🚀 ~ file: index.tsx ~ line 39 ~ unmount ~ container', container)
  root?.unmount()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
