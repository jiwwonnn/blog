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
          <div className='blog_content' key={it.id}>
            {
              it.image &&
              <div className="img_wrap">
                <img src={it.image} alt=""/>
              </div>
            }

            {/*title 클릭하면 상세로 이동*/}
            <Link to={`/detail/${it.id}`}className="title">{it.title}</Link>
            <div className="sub_title">{it.subtitle}</div>
            <ul className="badge_wrap">
                {
                  it.badgeList.map((badge, idx) => (
                    <li className="badge" key={idx}>{badge}</li>
                  ))
                }
            </ul>
            <div className="date">{new Date(it.newDate).toLocaleString()}</div>
          </div>
        ))
      }
    </>

  )
}

export default BlogContent