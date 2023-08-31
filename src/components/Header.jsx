import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const handleWriteClick = () => {
    navigate('/write')
  }

  return (
    <header>
      <div className="title">나의 블로그</div>
      <button onClick={handleWriteClick}>새 글 작성</button>
    </header>
  )
}

export default Header