const BlogContent = ({ data }) => {

  return (
    <>
      {
        data.map((it) => (
          <div className='blog_content' key={it.id}>
            <div className="img_wrap">
              <img src={it.image} alt=""/>
            </div>
            {/*title 클릭하면 상세로 이동*/}
            <div className="title">{it.title}</div>
            <div className="sub_title">{it.subtitle}</div>
            <ul className="badge_wrap">
                {
                  it.badgeList.map((badge, idx) => (
                    <li className="badge" key={idx}>{badge}</li>
                  ))
                }
            </ul>
            <div className="date">{it.date}</div>
          </div>
        ))
      }
    </>

  )
}

export default BlogContent