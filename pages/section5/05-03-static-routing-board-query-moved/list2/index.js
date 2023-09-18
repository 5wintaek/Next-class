import { gql, useQuery } from '@apollo/client';

const FETCH_BOARD = gql`
  query {
    fetchProduct(productId: "4c0ced73-ddd1-46fa-9c77-29dbea8d91d0") {
      seller
      name
      detail
      price
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD); // { } 부분은 항상 고정이다
  // useQuery 를 본 순간 바로 데이터를 요청한다
  // 실제 data 에 담긴 값들은 아직 undefiend 이다
  // undefiend 로 첫번쨰 렌더링 그리구 하드코딩이 렌더링됨, 두번쨰로 렌더링 때 data 안에 있는 데이터들을 꺼내서 사용할 수 있다.
  // 그래서 조건부 렌더링, 옵셔널 체이닝, 삼항연산자를 사용하여 그려줌
  console.log(data);

  return (
    <>
      <div>2번 게시글로 이동이 완료되었습니다.</div>
      <div>Seller : {data && data.fetchProduct.seller}</div>
      <div>Name : {data?.fetchProduct.name}</div>
      <div>Price : {data ? data.fetchProduct.price : '로딩중입니다!'}</div>
    </>
  );
}
