import TagItem from "./components/TagItem";

const ContentLeft = ({data}) => {
  return (
    <div className="content_left">
      <div className="content_title">태그 목록</div>
      <TagItem data={data}/>
    </div>
  )
}

export default ContentLeft