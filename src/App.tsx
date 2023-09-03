import Header from './components/header/Header'
import BoardList from './components/boardList/BoardList'
import './App.css'
import { useState } from 'react'

function App() {
  const [boardListVisible, setBoardListVisible] = useState(false)

  const toggleBoardList = () => {
    setBoardListVisible(!boardListVisible)
  }

  return (
    <>
    
      <Header
        boardListVisible={boardListVisible}
        toggleBoardList={toggleBoardList}
      />
    
      {boardListVisible && <BoardList />}
    
    </>
  )
}

export default App