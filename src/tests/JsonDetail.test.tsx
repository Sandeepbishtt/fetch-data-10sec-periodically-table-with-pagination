import React from 'react';
import JsonDetail from '../Components/JsonDetail'
import {Provider} from 'react-redux'
import store from '../Redux/Store'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'


describe('testing snapshot' , () => {
let container:HTMLDivElement;

beforeEach(()=>{
  container = document.createElement('div')
  document.body.appendChild(container)
  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <JsonDetail/>
  </Provider>
</BrowserRouter>,container)
})
afterEach(()=>{
  document.body.removeChild(container)
  container.remove()
})

it('render correctly',() =>{
  expect(container).toMatchSnapshot()
})

})