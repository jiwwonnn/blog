const BlogContent = ({ dummyData }) => {

  return (
    <>
      {
        dummyData.map((data) => (
          <div className='blog_content' key={data.id}>
            <div className="img_wrap">
              <img src='' alt=""/>
            </div>
            {/*title 클릭하면 상세로 이동*/}
            <div className="title">{data.title}</div>
            <div className="sub_title">{data.subtitle}</div>
            <ul className="badge_wrap">
                {
                  data.badgeList.map((badge) => (
                    <li className="badge">{badge}</li>
                  ))
                }
            </ul>
            <div className="date">{data.date}</div>
          </div>
        ))
      }
    </>

  )
}

export default BlogContent