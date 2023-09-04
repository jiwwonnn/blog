// const TagItem = ({ data }) => {
//
//   /**
//     전체보기도 있어야하고
//     이제 내가 입력한 내용들은 밑에 출력이 되어야하는데
//     이걸를 어떻게 map 에서 할 수 가 있찌 ?
//     그리고 내가 입력한 개수는 어떻게 구분을 시키고
//     클릭했을때 옆에 리스트에 새로이 보여지게 할 수 있을까 ?
//    */
//
//   console.log(data, "DATA!@#")
//
//   return (
//     <ul className="content_list">
//       <li className="content_item">
//         전체보기 ({data.length})
//       </li>
//       {data.map((item) => (
//         <li className="content_item" key={item.id}>
//           <ul className="badge_list">
//             {item.badgeList.map((badge, index) => (
//               <li className="badge_item" key={index}>
//                 {badge} ({badge.length})
//               </li>
//             ))}
//           </ul>
//         </li>
//       ))}
//
//     </ul>
//   )
// }
//
// export default TagItem


import React from 'react';

const TagItem = ({ data }) => {
  const tagCounts = {};

  const updateTagCount = (tag) => {
    if (tagCounts[tag]) {
      tagCounts[tag] += 1;
    } else {
      tagCounts[tag] = 1;
    }
  };

  data.forEach((item) => {
    item.badgeList.forEach((tag) => {
      updateTagCount(tag);
    });
  });

  // Calculate the total count for "전체보기"
  const totalCount = data.length;

  const tagListWithCounts = ['전체보기'].concat(
    Object.keys(tagCounts)
      .filter((tag) => tag !== '전체보기')
      .map((tag) => `${tag} (${tagCounts[tag]})`)
  );

  // Add total count to "전체보기" if there are more than one items
  if (totalCount > 1) {
    tagListWithCounts[0] = `전체보기 (${totalCount})`;
  }

  return (
    <ul className="content_list">
      {tagListWithCounts.map((tag, index) => (
        <li
          className='content_item'
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagItem;