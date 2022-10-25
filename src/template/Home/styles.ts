import styled from 'styled-components';

interface CounterProps {
    size: number;
}

export const MainBody = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
`;

export const SideBarContainer = styled.div`
    height: 100vh;
    width: 382px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ff858524;
`;

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Name = styled.span`
    color: #1e2732;
    font-size: 26px;
    margin-top: 24px;
`;

export const Arroba = styled.div`
    color: #fd4f00;
    font-size: 16px;
`;

export const ProfilePic = styled.img`
    width: 64px;
    height: 64px;
    margin: 24px;
`;

export const LogoutContainer = styled.div`
    background-color: #fd4f00;
    width: 382px;
    height: 82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LogoutText = styled.div`
    font-size: 26px;
    color: #ffffff;
    margin-left: 32px;
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffbd9f;
    height: 96px;
    border-radius: 24px;
    margin: 16px;
`;

export const HeaderImage = styled.img`
    width: 40px;
    height: 24px;
    margin: 16px;
`;

export const HeaderLogo = styled.img`
    height: 40px;
`;

export const TrendingsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NewPiuContainer = styled.div`
    background-color: #ececec;
    border-radius: 24px;
    margin: 16px;
    height: 56px;
    width: 800px;
`;

export const PiuSendButton = styled.button`
    background-color: #fd4f00;
    height: 24px;
    width: 64px;
    border-radius: 16px;
    color: white;
    font-weight: bold;
    border: none;
`;

export const Counter = styled.div<CounterProps>`
    color: ${({ size }) => (size > 140 ? '#fd4f00' : '#000000')};
    margin-left: 40px;
    font-size: 12px;
`;

export const PiuInput = styled.input`
    background-color: #fafafa;
    border: none;
    width: 688px;
    margin-left: 24px;
    margin-top: 16px;
    margin-right: 8px;
    border-radius: 8px;
    font-size: 16px;
`;

export const FriendsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NewFriendsText = styled.span`
    font-size: 24px;
    margin-left: 16px;
`;
