import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import Header from "./components/Header";

const Blog = ({ data, selectedTag, handleTagClick }) => {
  return (
    <>
      <Header />
      <div className="content_wrap">
        <ContentLeft data={data} selectedTag={selectedTag} handleTagClick={handleTagClick}/>
        <ContentRight data={data} selectedTag={selectedTag}/>
      </div>
    </>

  )
}

export default Blog