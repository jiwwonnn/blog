const TagItem = ({ data }) => {

  /**
    전체보기도 있어야하고
    이제 내가 입력한 내용들은 밑에 출력이 되어야하는데
    이걸를 어떻게 map 에서 할 수 가 있찌 ?
    그리고 내가 입력한 개수는 어떻게 구분을 시키고
    클릭했을때 옆에 리스트에 새로이 보여지게 할 수 있을까 ?
   */

  return (
    <ul className="content_list">
      <li className="content_item">
        전체보기 (32)
      </li>
    </ul>
  )
}

export default TagItem