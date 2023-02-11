import { useParams, useSearchParams } from "react-router-dom";

const list = [
  { id: 1, text: "게시글 내용입니다." },
  { id: 2, text: "리액트 라우터를 공부 중입니다." },
  { id: 3, text: "중첩 라우팅이 어렵습니다." },
  { id: 4, text: "오홍홍" },
];

function Detail() {
  const { id } = useParams(); //path 파라미터를 가져올 수 있다. 문자열로 넘어온다.

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  const post = list.find((item) => item.id === parseInt(id));
  for (let key of searchParams.keys()) {
    console.log(key);
  }

  return (
    <div>
      <h2>상세보기 {id}</h2>
      {post.text}
    </div>
  );
}

export default Detail;
