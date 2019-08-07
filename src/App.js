import React from "react";
import AvatarCheckbox from "./components/AvatarCheckbox";
import useFedLunchInfo from "./hook/useFedLunchInfo";
import { ReactComponent as Logo } from "./static/svg/logo.svg";
import styled from "styled-components/macro";

const Container = styled.div`
  margin: 0 auto;
  /* max-width: 1000px; */
  display: flex;
  flex-direction: column;
`;

const PrimaryButton = styled.div`
  box-sizing: border-box;
  margin: 10px auto;
  width: 158px;
  padding: 12px 16px;
  font-size: 24px;
  border: solid 3px #505050;
  border-radius: 28px;
`;

const BottomBackground = styled.div`
  background-color: #ffcc00;
  min-height:calc(100vh - 194px);
`;

const TopLayout = styled.div`
  margin: 28px;
`;

const TopLogoArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Text = styled.span`
  color: ${props => (!!props.color ? props.color : "#000")};
  font-size: ${props => (!!props.size ? props.size : "16px")};
  margin-right: ${props => (!!props.marginRight ? props.marginRight : 0)};
`;

function App() {
  const { members, restaurant } = useFedLunchInfo();
  const [wantToGo, setWantToGo] = React.useState([]);
  const [searchResult, setSearchResult] = React.useState([]);

  const searchRestaurantWeCanGo = () => {
    //過濾掉有人不喜歡的餐廳
    const filterRestaurant = [...restaurant].filter(item => {
      return (
        item.noLike === undefined ||
        item.noLike.filter(noLikePeople => wantToGo.indexOf(noLikePeople) > -1)
          .length === 0
      );
    });
    //隨機排序後 拿前三個
    const randomResult = filterRestaurant
      .sort((a, b) => {
        var num = Math.random() > 0.5 ? -1 : 1;
        return num;
      })
      .slice(0, 3);
    setSearchResult(randomResult);
  };

  return (
    <Container>
      <TopLayout>
        <TopLogoArea>
          <Logo />
          <div>
            <Text color="#505050" size="26px" marginRight="8px">
              {wantToGo.length}
            </Text>
            <Text color="#a7a7a7" size="18px">
              /
            </Text>
            <Text color="#a7a7a7" size="20px">
              {members.length}
            </Text>
          </div>
        </TopLogoArea>
        <div>
          {members.map(member => {
            const ischecked = wantToGo.includes(member.id);
            return (
              <AvatarCheckbox
                key={member.id}
                member={member}
                ischecked={ischecked}
                handleChange={() => {
                  if (!ischecked) setWantToGo(state => [...state, member.id]);
                  else {
                    const wantGo = [...wantToGo];
                    const index = wantGo.indexOf(member.id);
                    if (index > -1) {
                      wantGo.splice(index, 1);
                    }
                    setWantToGo(wantGo);
                  }
                }}
              />
            );
          })}
        </div>
      </TopLayout>
      <BottomBackground>
        <div>
          {!!searchResult &&
            searchResult.map(r => <RestaurantCard key={r.id} name={r.name} />)}
        </div>
        <PrimaryButton onClick={searchRestaurantWeCanGo}>
          {searchResult.length > 0 ? "我想吃別的" : "到底吃什麼"}
        </PrimaryButton>
      </BottomBackground>
    </Container>
  );
}

const RestaurantCardContainer = styled.div`
  margin: 28px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
`;

const RestaurantPhoto = styled.div`
  width: 140px;
  height: 140px;
  margin: 10px;
  border: solid;
  border-radius: 16px;
  background:#ffffff;
`;

const RestaurantTitle = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
`;

const RestaurantCard = props => (
  <RestaurantCardContainer>
    <RestaurantPhoto />
    <RestaurantTitle>{props.name}</RestaurantTitle>
  </RestaurantCardContainer>
);

export default App;
