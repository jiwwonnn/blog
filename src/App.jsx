import {BrowserRouter, Routes, Route} from "react-router-dom";
import Blog from "./Blog";
import Write from "./Write";
import {useRef, useState} from "react";

const App = () => {

  const [data, setData] = useState([])

  const newId = useRef(0)

  const blogWrite = (title, subtitle, badgeList, image) => {
    // id값을 어떻게 ?
    const newDate = new Date().getTime();
    const newBlogWrite = {
      id: newId.current,
      image,
      title,
      subtitle,
      badgeList,
      newDate,
    }
    newId.current += 1
    setData([newBlogWrite, ...data])
  }


  const dummyData = [
    {
      id: 0,
      image : 'https://picsum.photos/200',
      title : '더미 타이틀입니다1',
      subtitle: '더미 서브 타이틀입니다1',
      badgeList : ["뱃지1-1", "뱃지1-2"],
      date : '2023-01-01',
    },
    {
      id: 1,
      image : 'https://picsum.photos/200',
      title : '더미 타이틀입니다2',
      subtitle: '더미 서브 타이틀입니다2',
      badgeList : ["뱃지2-1", "뱃지2-2"],
      date : '2023-01-02',
    }
  ]



  return (
    <div className='blog_wrap'>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Blog dummyData={dummyData}/>} />
          <Route path={'/write'} element={<Write blogWrite={blogWrite}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App