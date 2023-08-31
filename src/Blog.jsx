import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import Header from "./components/Header";

const Blog = ({ dummyData }) => {

  return (
    <>
      <Header />
      <div className="content_wrap">
        <ContentLeft />
        <ContentRight dummyData={dummyData} />
      </div>
    </>

  )
}

export default Blog