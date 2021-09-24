import styled from "styled-components";

const IPD = () => {
  return (
    <Container>
      <PageHeading>IPD Section</PageHeading>
      <IpdForm>
        <InputField>
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </InputField>
        <InputField>
          <label>Father's Name</label>
          <input type="text" />
        </InputField>

        <ShortInput>
          <InputField>
            <label>Age</label>
            <input type="text" />
          </InputField>
        </ShortInput>
      </IpdForm>
    </Container>
  );
};

export default IPD;

const Container = styled.div`
  width: 40%;
  margin: 24px auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  padding: 8px;
`;

const PageHeading = styled.h1`
  text-align: center;
`;

const IpdForm = styled.form`
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  /* background-color: yellow; */
  margin: 16px auto;
  /* background-color: white; */
  /* height: 80vh; */
`;

const InputField = styled.div`
  /* width: 40%; */
  /* margin-bottom: 16px; */
  /* padding: 16px 4px; */
  margin: 8px;
  label {
    margin-right: 20px;
    font-size: 20px;
    display: block;
  }
  input {
    border-radius: 6px;
    border-bottom: 1px solid black;
    background-color: transparent;
    padding: 8px;
    width: 100%;
  }
`;

const ShortInput = styled.div`
width: 46%;
`
