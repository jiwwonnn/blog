import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Detail = ({ data, blogDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [isDataChanged, setDataChanged] = useState(false); // 데이터 변경 여부 상태 추가


  // Find the item with the matching id
  const selectedItem = data.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    // Handle the case where the item is not found
    return <div>Item not found</div>;
  }

  // 삭제가 전혀 되지 않음
  const handleDelete = (id) => {
    blogDelete(id)
    alert("삭제되었습니다.")
    setDataChanged(true); // 데이터 변경 여부를 표시
    navigate('/')
    console.log(data, "handleDataDelete")
  }

  useEffect(() => {
    if (isDataChanged) {
      navigate("/");
    }
  }, [isDataChanged, navigate]);

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
      <div className="content_text">{selectedItem.info}</div>
      <div className='btn_wrap'>
        <button>수정하기</button>
        <button onClick={() => handleDelete(id)}>삭제하기</button>
      </div>
    </div>
  );
};

export default Detail;