import {
  Title,
  Wrapper,
  Label,
  WritterWrapper,
  EmailInput,
  Input,
  InputWrapper,
  Subject,
  SubjectWrapper,
  ContentWrapper,
  Content,
  AddressWrapper,
  AddressCodeWrapper,
  AddressCode,
  SearchButton,
  Address,
  ImageWrapper,
  UploadButton,
  ButtonWrapper,
  OptionWrapper,
  RadioButton,
  RadioLabel,
} from '@/styles/emotion';

export default function boards() {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WritterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Input type="text" placeholder="이름을 적어주세요" />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </InputWrapper>
      </WritterWrapper>
      <SubjectWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 입력하세요" />
      </SubjectWrapper>
      <ContentWrapper>
        <Label>내용</Label>
        <Content type="text" placeholder="내용을 입력하세요" />
      </ContentWrapper>
      <AddressWrapper>
        <Label>주소</Label>
        <AddressCodeWrapper>
          <AddressCode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </AddressCodeWrapper>
        <Address />
        <Address />
      </AddressWrapper>
      <ContentWrapper>
        <Label>유튜브</Label>
        <Address />
      </ContentWrapper>
      <ImageWrapper>
        <Label>사진 첨부</Label>
        <ButtonWrapper>
          <UploadButton></UploadButton>
          <UploadButton></UploadButton>
          <UploadButton></UploadButton>
        </ButtonWrapper>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인 설정</Label>
        <ButtonWrapper>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="picture" name="radio-button" />
          <RadioLabel htmlFor="youtube">사진</RadioLabel>
        </ButtonWrapper>
      </OptionWrapper>
    </Wrapper>
  );
}
