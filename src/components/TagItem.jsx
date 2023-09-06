import React from 'react';

const TagItem = ({ data, selectedTag, handleTagClick }) => {
  const tagCounts = {};

  // 태그 개수를 계산하는 함수
  const updateTagCount = (tag) => {
    if (tagCounts[tag]) {
      tagCounts[tag] += 1;
    } else {
      tagCounts[tag] = 1;
    }
  };

  // 데이터에서 태그 개수 계산
  data.forEach((item) => {
    item.badgeList.forEach((tag) => {
      updateTagCount(tag);
    });
  });

  // 전체보기 개수 계산
  const totalCount = data.length;

  // 전체보기 뱃지 리스트 개수 계산
  const allBadgeCount = data.reduce((count, item) => count + item.badgeList.length, 0);

  // 태그 목록과 개수를 생성
  const tagListWithCounts = Object.keys(tagCounts)
    .filter((tag) => tag !== '전체보기')
    .map((tag) => `${tag} (${tagCounts[tag]})`);

  return (
    <ul className="content_list">
      <li className={`content_item ${selectedTag === '' ? 'active' : ''}`} onClick={() => handleTagClick('')}>
        {`전체보기 (${allBadgeCount})`}
      </li>
      {tagListWithCounts.map((tag, index) => (
        <li className={`content_item ${selectedTag === tag.split(' ')[0] ? 'active' : ''}`} key={index} onClick={() => handleTagClick(tag.split(' ')[0])}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagItem;
