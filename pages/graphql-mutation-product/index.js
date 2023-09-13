import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

//등록
// 1. 첫번쨰로 타입지정
// 2. $는 변수타입 지정
const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      # 전달할 변수 적는 곳
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
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        // await 을 빼주면 promise 상태로 변환
        variables: {
          // variables => $ 역할을함
          seller: '내꺼임',
          createProductInput: {
            name: '마우스',
            detail: '메메',
            price: 3000,
          },
        },
      });
      console.log(result);
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
