import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

//등록
// 1. 첫번쨰로 타입지정
// 2. $는 변수타입 지정
const setGraphql = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const [createBoardMutation] = useMutation(setGraphql);

  const onClickSubmit = async () => {
    try {
      const result = await createBoardMutation({
        // await 을 빼주면 promise 상태로 변환
        variables: {
          // variables => $ 역할을함
          writer: writer,
          title: title,
          contents: contents,
        },
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // 값을 뽑을려면 e.target.value 필요 (state에 저장)
  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter} />
      제목 : <input type="text" onChange={onChangeTitle} />
      내용 : <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
