import NavComponent from 'components/NavComponents';
import TrendBox from 'components/TrendBox';
import AddFriends from 'components/AddFriends';
import PiusTemplate from 'components/Post';

import { useState } from 'react';

import * as S from './styles';

const HomeTemplate = () => {
    interface InterfacePiu {
        content: string;
    }

    const [valueInputPiu, setInputPiu] = useState('');
    const [postsArray, setPostsArray] = useState<InterfacePiu[]>([]);

    function handleClick() {
        if (valueInputPiu.length > 0 && valueInputPiu.length < 140) {
            setPostsArray([{ content: valueInputPiu }, ...postsArray]);
        }
    }

    return (
        <>
            <S.MainBody>
                <S.SideBarContainer>
                    <S.ProfileContainer>
                        <S.ProfilePic src="/assets/ProfilePic.svg" />
                        <S.NameContainer>
                            <S.Name>Fernanda Cesar</S.Name>
                            <S.Arroba>@eufercesar</S.Arroba>
                        </S.NameContainer>
                    </S.ProfileContainer>
                    <S.NavContainer>
                        <NavComponent title="Home" img="/assets/Home.svg" />
                        <NavComponent
                            title="Mensagens"
                            img="/assets/Mensagens.svg"
                        />
                        <NavComponent title="Amigos" img="/assets/Amigos.svg" />
                        <NavComponent title="Grupos" img="/assets/Grupos.svg" />
                        <NavComponent
                            title="Deslikes"
                            img="/assets/Deslikes.svg"
                        />
                        <NavComponent title="Likes" img="/assets/Likes.svg" />
                        <NavComponent
                            title="Trending"
                            img="/assets/Trending.svg"
                        />
                        <NavComponent
                            title="Eventos"
                            img="/assets/Eventos.svg"
                        />
                    </S.NavContainer>
                    <S.LogoutContainer>
                        <S.LogoutText>SAIR</S.LogoutText>
                    </S.LogoutContainer>
                </S.SideBarContainer>
                <S.HomeContainer>
                    <S.HeaderContainer>
                        <S.HeaderImage src="/assets/Vector.svg" />
                        <S.HeaderLogo src="/assets/PiuPiuwer.svg" />
                    </S.HeaderContainer>
                    <S.TrendingsContainer>
                        <TrendBox number="1" />
                        <TrendBox number="2" />
                        <TrendBox number="3" />
                        <TrendBox number="4" />
                    </S.TrendingsContainer>
                    <S.FeedContainer>
                        <S.PostsContainer>
                            <S.NewPiuContainer>
                                <S.PiuInput
                                    value={valueInputPiu}
                                    onChange={(e) => {
                                        setInputPiu(e.target.value);
                                    }}
                                />
                                <S.PiuSendButton onClick={() => handleClick()}>
                                    P I A R
                                </S.PiuSendButton>
                                <S.Counter size={valueInputPiu.length}>
                                    O número de caracteres é:{' '}
                                    {valueInputPiu.length}
                                </S.Counter>
                            </S.NewPiuContainer>
                            {postsArray.map((data) => (
                                <PiusTemplate content={data.content} />
                            ))}
                        </S.PostsContainer>
                        <S.FriendsContainer>
                            <S.NewFriendsText>
                                TALVEZ VOCÊ CONHEÇA
                            </S.NewFriendsText>
                            <AddFriends
                                name="Fulano de Tal"
                                user="fulanodetal"
                            />
                            <AddFriends
                                name="Ciclano da Silva"
                                user="ciclanodasilva"
                            />
                            <AddFriends
                                name="Beltrano Santos"
                                user="beltrano.santos"
                            />
                            <AddFriends
                                name="Deltrano Souza"
                                user="deltrano_souza"
                            />
                        </S.FriendsContainer>
                    </S.FeedContainer>
                </S.HomeContainer>
            </S.MainBody>
        </>
    );
};
export default HomeTemplate;
