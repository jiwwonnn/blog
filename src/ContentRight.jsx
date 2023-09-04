import BlogContent from "./components/BlogContent";

const ContentRight = ({data }) => {

  console.log(data, "DATA~")


  return (
    <div className="content_right">
      <input type="text" placeholder='검색어를 입력해라'/>
      <div className="blog_content_wrap">
        <BlogContent data={data}/>
      </div>
    </div>
  )
}

export default ContentRight