import {BrowserRouter, Routes, Route} from "react-router-dom";
import Blog from "./Blog";
import Write from "./Write";
import {useRef, useState} from "react";
import Detail from "./Detail";
import Edit from './Edit';

const App = () => {

  const [data, setData] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const newId = useRef(0);

  const blogWrite = (title, subtitle, badgeList, image, info) => {
    const newDate = new Date().getTime();
    const newBlogWrite = {
      id: newId.current,
      image,
      title,
      subtitle,
      badgeList,
      newDate,
      info,
    };
    newId.current += 1;
    setData([newBlogWrite, ...data]);
  };

  const blogDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const blogUpdate = (updatedBlog) => {
    const updatedData = data.map((item) =>
      item.id === updatedBlog.id ? updatedBlog : item
    );
    setData(updatedData);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };



  return (
    <div className='blog_wrap'>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Blog data={data} selectedTag={selectedTag} handleTagClick={handleTagClick}/>} />
          <Route path={'/write'} element={<Write blogWrite={blogWrite}/>} />
          <Route path={'/edit/:id'} element={<Edit data={data} blogUpdate={blogUpdate} />} />
          <Route path={'/detail/:id'} element={<Detail data={data} blogDelete={blogDelete} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App