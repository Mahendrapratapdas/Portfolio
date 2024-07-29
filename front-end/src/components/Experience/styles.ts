import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 15rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #e8e9eb;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 6px 6px 5px rgb(255, 249, 140);
  max-width: 400px;
  width: 100%;
  
  .details {
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0;
      font-size: 1.2em;
      color: #333;
    }

    p {
      margin: 5px 0;
      color: #555;
    }
  }
`;

export const Header = styled.div`
    margin-top: 15rem;
    display: block;
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
`;

export const CavissonImage = styled.img`
  width: 80px;
  height: 40px;
  margin-right: 30px;
`;

export const UcsImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 30px;
  border-radius: 50px;
`;