import TagItem from "./components/TagItem";

const ContentLeft = ({data, selectedTag, handleTagClick}) => {
  return (
    <div className="content_left">
      <div className="content_title">태그 목록</div>
      <TagItem data={data} selectedTag={selectedTag} handleTagClick={handleTagClick}/>
    </div>
  )
}

export default ContentLeft