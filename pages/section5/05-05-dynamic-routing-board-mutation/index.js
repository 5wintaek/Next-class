import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';

//등록
// 1. 첫번쨰로 타입지정
// 2. $는 변수타입 지정
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        // await 을 빼주면 promise 상태로 변환
        variables: {
          // variables => $ 역할을함
          writer: '오승택',
          title: 'GraphQL',
          contents: 'Testing',
        },
      });
      console.log(result.data.createBoard.number);
      router.push(
        `/section5/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
