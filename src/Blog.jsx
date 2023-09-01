import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import Header from "./components/Header";

const Blog = ({ data }) => {

  console.log(data, "DATA!@#")

  return (
    <>
      <Header />
      <div className="content_wrap">
        <ContentLeft data={data}/>
        <ContentRight data={data}/>
      </div>
    </>

  )
}

export default Blog