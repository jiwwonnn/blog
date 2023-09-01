// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import {useCallback, useRef, useState} from "react";


const Write = ({ blogWrite }) => {


  /**
   에디터에 name 에러 나오는거랑
   에디터도 image, title .. 넣는곳에 cotnent 라고 넣고 할 수 있는 방법이 있는지 찾아야할듯
   따로 관리해야될것 같은데 따로 관리하면 blogWrite 에서 새로 만드는 함수를 만들었는데 여기에 추가를
   어떻게 해야할지 모르겠음
   */


  const editorRef = useRef(null)

  const [state, setState] = useState({
    image: '',
    title: '',
    subtitle: '',
    badge: '',
    info : '',
  })

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
    [e.target.name] : e.target.value
    })

  }

  const handleContentChange = useCallback(() => {
    setState(prev => ({
      ...prev,
      info: editorRef.current.getInstance().getMarkdown()
    }));
  }, []);

  const handleSubmit = () => {
    blogWrite(state.title, state.subtitle, state.badge, state.image, state.info)

    console.log(state)
  }

  return (
    <div className='write_wrap'>
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
          name={'badge'}
          value={state.badge}
          onChange={handleStateChange}
          placeholder='태그를 입력해주세요.'
        />
        <div className="badge">뱃지123</div>
      </div>


      <div className="editor_wrap">
        <Editor
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="350px" // 에디터 창 높이
          initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
          initialValue= ' '
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
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  )
}

export default Write