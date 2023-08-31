// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import {useState} from "react";


const Write = ({ blogWrite }) => {

  const [state, setState] = useState({
    image: '',
    title: '',
    subtitle: '',
    badge: '',
    content: '',
  })


  console.log(state.content, "STATE_CONTENT !!")

  const handleStateChange = (e) => {
    setState({
      ...state,
    [e.target.name] : e.target.value
    })
  }

  const handleSubmit = () => {
    blogWrite(state.title, state.subtitle, state.badge, state.image)

    console.log(state, "STATE!!!!!!!")
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
          initialValue= {state.content}
          toolbarItems={[
            // 툴바 옵션 설정
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock']
          ]}
          name={'content'}
          onChange={handleStateChange}
        ></Editor>
      </div>
      <div className="button_wrap">
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  )
}

export default Write