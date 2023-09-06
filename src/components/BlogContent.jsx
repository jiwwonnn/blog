import {Link} from "react-router-dom";

const BlogContent = ({ data }) => {
  return (
    <>
      {
        data.length === 0 &&
          <div className='nodata'>작성된 글이 없습니다.</div>
      }
      {
        data.map((it) => (
          <Link to={`/detail/${it.id}`} className='blog_content' key={it.id}>
            {
              it.image &&
              <div className="img_wrap">
                <img src={it.image} alt=""/>
              </div>
            }

            <p className="title">{it.title}</p>
            <div className="sub_title">{it.subtitle}</div>
            <ul className="badge_wrap">
                {
                  it.badgeList.map((badge, idx) => (
                    <li className="badge" key={idx}>{badge}</li>
                  ))
                }
            </ul>
            <div className="date">{new Date(it.newDate).toLocaleString()}</div>
          </Link>
        ))
      }
    </>

  )
}

export default BlogContent