import BlogContent from "./components/BlogContent";
import {useState} from "react";

const ContentRight = ({data }) => {

  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태


  return (
    <div className="content_right">
      <input type="text" placeholder='검색어를 입력해라'
       value={searchKeyword}
       onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <div className="blog_content_wrap">
        <BlogContent data={data} searchKeyword={searchKeyword}/>
      </div>
    </div>
  )
}

export default ContentRight