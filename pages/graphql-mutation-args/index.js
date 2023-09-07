import { gql, useMutation } from '@apollo/client';

//등록
const setGraphql = gql`
  mutation {
    createBoard(writer: "철수", title: "제목입니다", contents: "dummy") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createBoard] = useMutation(setGraphql);

  const onClickSubmit = async () => {
    const result = await createBoard({
      // await 을 빼주면 promise 상태로 변환
      variables: {
        writer: '철수',
        title: '제목입니다',
        content: 'dummy',
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
