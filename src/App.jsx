import {BrowserRouter, Routes, Route} from "react-router-dom";
import Blog from "./Blog";
import Write from "./Write";
import {useRef, useState} from "react";
import Detail from "./Detail";

const App = () => {

  const [data, setData] = useState([])

  const newId = useRef(0)

  /**
   blogWrite 에서는 내가 텍스트에디터에서 입력한 값을 안받아도되는건지 , 아니면 받아야하는데
   내가 추가를 안한건지 ..
   */

  const blogWrite = (title, subtitle, badgeList, image, info) => {
    // id값을 어떻게 ?
    const newDate = new Date().getTime();
    const newBlogWrite = {
      id: newId.current,
      image,
      title,
      subtitle,
      badgeList,
      newDate,
      info
    }
    newId.current += 1
    setData([newBlogWrite, ...data])
  }

  const blogDelete = (id) => {

    console.log(id, "IDDDDDDDDDDDDDDDDDDDDDDDDDDDD")

    setData((prev) => {
      const newList = prev.filter((it) => it.id !== id)
      console.log(newList, "NEW LIST"); // 데이터가 올바르게 업데이트되었는지 확인
      return newList
    })
  }


  return (
    <div className='blog_wrap'>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Blog data={data} />} />
          <Route path={'/write'} element={<Write blogWrite={blogWrite}/>} />
          <Route path={'/detail/:id'} element={<Detail data={data} blogDelete={blogDelete}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App