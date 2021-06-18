import styled from "styled-components";

const StyledButton = styled.button`
display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  
  background-color: rgba(75, 132, 243, 1);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
    background-color: rgb(65, 105, 225,1);
    

  }
`

export default StyledButton;


// const GlobalStyle = styled.createGlobalStyle`
//   *, *:before, *:after {
//     box-sizing: inherit;
//   }

//  html {
//   font-size: 62.5%;
//   font-family: 'Lato', sans-serif;
//   box-sizing: border-box;
//  }

//  body {
//   background: linear-gradient(
//    35deg,
//    hsla(210, 29%, 24%, 1),
//    hsla(204, 70%, 53%, 1) 100%
//   );
//  }
// `

// const Section = styled.section`
//  height: 100vh;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  flex-direction: column;
//  font-size: 5rem;

//  @media screen and (max-width: 45em) {
//   font-size: 3rem;
//  }
// `

// const Title = styled.h1`
//  color: hsla(150, 14%, 97%, 1);
//  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
//  margin: 0;
// `

// const Container = styled.div`
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  position: relative;
//  min-height: 10rem;
// `

// const Btn = styled.button`
//  background-color: ${({ buynow }) =>
//   buynow ? 'hsla(40, 72%, 50%, 1)' : 'hsla(347, 49%, 46%, 1)'};
//  border: 1px solid
//   ${({ buynow }) => (buynow ? 'hsla(40, 72%, 60%, 1)' : 'hsla(0, 0%, 0%, 0.4)')};
//  white-space: nowrap;
//  color: hsla(150, 14%, 97%, 1);
//  cursor: pointer;
//  outline: none;
//  font-size: 3rem;
//  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
//  letter-spacing: 0.1rem;
//  border-radius: 0.5rem;
//  user-select: none;
//  padding: 1.5rem 2rem;
//  margin: 1rem;
//  transition: all 0.1s ease-in;

//  ::-moz-focus-inner {
//   border: 0;
//  }

//  &:hover {
//   background-color: ${({ buynow }) =>
//    buynow ? 'hsla(40, 72%, 60%, 1)' : 'hsla(347, 49%, 51%, 1)'};
//   ${({ buynow }) => buynow && `transform: translateY(-3px)`}
//  }

//  &:active {
//   background-color: ${({ buynow }) =>
//    buynow ? 'hsla(40, 72%, 35%, 1)' : 'hsla(347, 49%, 26%, 1)'};
//  }

// @media screen and (max-width: 45em) {
//   padding: 1rem 1rem;
//   font-size: 1.5rem;
//   margin: 0.5rem;
//  }
// `

// const SignInBtn = styled(Btn)`
//  text-decoration: none;
//  background-color: hsla(189, 85%, 28%, 1);
//  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125),
//   0 1px 1px rgba(0, 0, 0, 0.05);
//  border-bottom-width: 0.5rem;

//  &:hover {
//   background-color: hsla(189, 85%, 32%, 1);
//  }

//  &:active {
//   border-bottom-width: 0.1rem;
//   border-top-width: 0.5rem;
//  }
// `

// const App = () => (
//  <Section>
//   <Title>Styled components</Title>
//   <Container>
//    <Btn type="button">Cancel</Btn>
//    <Btn type="button" buynow>
//     Buy Now
//    </Btn>
//    <SignInBtn as="a" href="#0">
//     Sign in
//    </SignInBtn>
//   </Container>
//  </Section>
// )

// ReactDOM.render(
//  <>
//   <App />
//   <GlobalStyle />
//  </>,
//  document.getElementById('root')
// )