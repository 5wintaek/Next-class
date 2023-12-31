import axios from 'axios';

export default function RestGetPage() {
  const onClickAsync = () => {
    const result = axios.get('https://koreanjson.com/posts/1'); // 요청을 보내놓고 기다리지 않고 result 에 넣어줌
    console.log(result); // Promise
  };

  const onClickSync = async () => {
    const result = await axios.get('https://koreanjson.com/posts/1');
    console.log(result.data.title);
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기 요청)</button>
      <button onClick={onClickSync}>REST-API(동기) 요청</button>
    </div>
  );
}
