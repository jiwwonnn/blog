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
  })

  const [content, setContent] = useState({
    info : ''
  })

  const handleStateChange = (e) => {
    setState({
      ...state,
    [e.target.name] : e.target.value
    })

  }

  const handleContentChange = useCallback(() => {
    // 객체 안에 동일하게 넣어줘야함
    // setContent(
    //   editorRef.current.getInstance().getMarkdown()
    // );
    // 이거는 안댐

    setContent({
      info : editorRef.current.getInstance().getMarkdown()
    });
  }, [content])

  const handleSubmit = () => {
    blogWrite(state.title, state.subtitle, state.badge, state.image, content.info)

    console.log(state , content)
  }

  return (
    <div className='write_wrap'>
      <div className="img_wrap">
        <input
          type="file"
        />
        <div className="image">
          <img src="" alt=""/>
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
        ></Editor>
      </div>
      <div className="button_wrap">
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  )
}

export default Write