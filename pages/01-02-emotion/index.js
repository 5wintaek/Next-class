import { Email, EmailInput } from "@/styles/emotion";

export default function emotionPage() {
  return (
    <>
      <Email>이메일</Email>
      <EmailInput type="email" />
      <button>로그인</button>
    </>
  );
}
