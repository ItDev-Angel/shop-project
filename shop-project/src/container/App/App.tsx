import React from 'react'

type Props = {
  title: string
}
const AppList = () => {
    return (
        <ul>
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
        </ul>
    )
}
const AppHeader = (props:Props) => {
  return (
      <h1>Hello {props.title}</h1>
  )
}
const App = () => {
    return (
        <>
            <AppHeader title="hi"/>
            <AppHeader title="hello"/>
            <AppList />
        </>
    )
}

export default App
