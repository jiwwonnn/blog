import BlogContent from "./components/BlogContent";
import {useState} from "react";

const ContentRight = ({data, selectedTag }) => {

  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태

  const filteredData = selectedTag
    ? data.filter((item) => item.badgeList.includes(selectedTag))
    : data;


  return (
    <div className="content_right">
      <input type="text" placeholder='검색어를 입력해라'
       value={searchKeyword}
       onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <div className="blog_content_wrap">
        <BlogContent data={filteredData} searchKeyword={searchKeyword}/>
      </div>
    </div>
  )
}

export default ContentRight