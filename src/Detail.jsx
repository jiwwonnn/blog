import {useNavigate, useParams} from "react-router-dom";
import {Fragment} from "react";

const Detail = ({ data, blogDelete }) => {


  const { id } = useParams();
  const navigate = useNavigate();


  const selectedItem = data.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const handleDelete = (id) => {
    blogDelete(id);
    alert("삭제되었습니다.");
    navigate("/");
  };

  const handleEdit = () => {
    navigate(`/edit/${selectedItem.id}`);
  };

  return (
    <div className='detail_wrap'>
      <div className="title_wrap">{selectedItem.title}</div>
      <div className="date_wrap">{selectedItem.subtitle}</div>
      <div className="tag_wrap">
        {selectedItem.badgeList.map((tag, index) => (
          <div className="tag" key={index}>{tag}</div>
        ))}
      </div>
      <div className="content_img_wrap">
        <img src={selectedItem.image} alt=""/>
      </div>
      <div className="content_text">
        {selectedItem.info.split('\n').map((line, idx) => (
          <Fragment key={idx}>
            {line}
            <br />
          </Fragment>
        ))}
      </div>
      <div className='btn_wrap'>
        <button onClick={() => navigate(-1)}>이전으로</button>
        <button onClick={handleEdit}>수정하기</button>
        <button onClick={() => handleDelete(selectedItem.id)}>삭제하기</button>
      </div>
    </div>
  );
};

export default Detail;
