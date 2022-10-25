import * as S from './styles';

export type AddFriendsProps = {
    name: string;
    user: string;
};

const AddFriends: React.FC<AddFriendsProps> = ({ name, user }) => (
    <S.AddFriendsContainer>
        <S.ProfileImg src="/assets/ProfileFriends.svg" />
        <S.FriendProfile>
            <S.NameFriend>{name}</S.NameFriend>
            <S.UserFriend>@{user}</S.UserFriend>
        </S.FriendProfile>
        <S.AddSymbol src="/assets/Add.svg" />
    </S.AddFriendsContainer>
);

export default AddFriends;
