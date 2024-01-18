import styled from "styled-components";

export const H2 = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
  font-size: 2rem;
`;

export const Menucontentsub = styled.span`
color: white;
background-color: #FB9622;
border-radius: 2rem;
border: 1px solid #ccc;
padding: 0.1rem 0.5rem;
font-size: 0.7rem;
`;

export const Menucontenthead = styled.span`
font-size: 2em;
`;

export const Menucontenthash = styled(Menucontentsub)`
color: black;
background-color: white;
`;

export const LeftButton = styled.button`
border: 1px solid #ccc;
border-radius: 50%;
color: black;
background-color: white;
padding: 0.5rem;
font-size: 1.5rem;
`;

export const RightButton = styled(LeftButton)``;

export const Margintop = styled.div`
margin-top: 150px;
`;

export const Marginbottom = styled.div`
margin-bottom: 150px;
`;

export const MarginY = styled(Marginbottom)`
margin-top: 150px;
`;

export const FixedformLg = styled.div`
  background-color: #0e693c;
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`

export const FixedformSm = styled(FixedformLg)`
width: 4rem;
height: 4rem;
left: unset;
right: 4rem;
bottom: 3rem;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color: white;
`;

export const FixedChat = styled(FixedformSm)`
bottom: 7.5rem;
color: yellow;
`;

export const FixedKakao = styled(FixedChat)`
bottom: 12rem;
flex-direction: column;
`;