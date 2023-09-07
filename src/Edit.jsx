import React, {useCallback, useRef, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Editor} from "@toast-ui/react-editor";

const Edit = ({ data, blogUpdate }) => {



  const editorRef = useRef(null)
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedItem = data.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const [state, setState] = useState(selectedItem);



  // 파일 업로드 관련
  const upload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setState({
        ...state,
        image: reader.result
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleStateChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    blogUpdate(state);
    navigate(`/`);
  };

  const handleBadgeInputChange = (e) => {
    setState({
      ...state,
      badgeText: e.target.value
    })
  }

  const handleBadgeInputKeyPress = (e) => {
    if (e.key === "Enter") {
      // Enter 키가 눌렸을 때
      if (state.badgeText.trim() !== "") {
        // 입력 텍스트가 비어 있지 않은 경우에만 처리
        const updatedBadges = [...state.badgeList, state.badgeText]; // 새로운 뱃지를 기존 뱃지 목록에 추가
        setState({
          ...state,
          badgeList: updatedBadges,
          badgeText: "", // badge 입력 텍스트 지우기
        });
      }
    }
  };


  const handleContentChange = useCallback(() => {
    setState(prev => ({
      ...prev,
      info: editorRef.current.getInstance().getMarkdown()
    }));
  }, []);


  const handleBadgeDelete = (index) => {
    const updatedBadges = [...state.badgeList];
    updatedBadges.splice(index, 1); // 선택한 태그 삭제
    setState({
      ...state,
      badgeList: updatedBadges,
    });
  };


  return (
    <div className="write_wrap">
      <div className="img_wrap">
        <label htmlFor='fileInput'>파일선택</label>
        <input
          id='fileInput'
          type="file"
          onChange={(event) => upload(event)}
          style={{ display: 'none'}}
        />
        <div className="image">
          {state.image ? <img src={state.image} alt="썸네일" /> : null}
        </div>
      </div>
      <div className="title_text">
        <input
          type="text"
          name={'title'}
          value={state.title}
          onChange={handleStateChange}
          placeholder='제목을 입력해주세요.'
        />
      </div>
      <div className="sub_text">
        <input
          type="text"
          name={'subtitle'}
          value={state.subtitle}
          onChange={handleStateChange}
          placeholder='소제목을 입력해주세요.'
        />
      </div>
      <div className='badge_wrap'>
        <input
          type="text"
          name="badge"
          value={state.badgeText} // badgeText를 입력 값으로 사용
          onChange={handleBadgeInputChange}
          onKeyPress={handleBadgeInputKeyPress} // Enter 키 눌림 처리
          placeholder="태그를 입력 후 엔터"
        />
        {state.badgeList?.map((badge, index) => (
          <div className={'badge'} key={index} onClick={() => handleBadgeDelete(index)}>{badge}</div>
        ))}
      </div>


      <div className="editor_wrap">
        <Editor
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="350px" // 에디터 창 높이
          initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
          initialValue={state.info}
          ref={editorRef}
          onChange={handleContentChange}
          name={'info'}
          toolbarItems={[
            // 툴바 옵션 설정
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock']
          ]}
        />
      </div>
      <div className="button_wrap">
        <button onClick={() => navigate(-1)}>취소</button>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
};

export default Edit;
