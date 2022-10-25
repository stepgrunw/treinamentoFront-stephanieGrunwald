import { useState } from 'react';

import * as S from './styles';

interface PiuProps {
    content: string;
}

const PiusTemplate: React.FC<PiuProps> = ({ content }) => {
    const [like, setLike] = useState(false);
    const [trash, setTrash] = useState(true);

    return (
        <>
            <S.PiusContainer deletePiu={trash}>
                <S.PiuText>{content}</S.PiuText>
                <S.PiuReactions>
                    <S.LikeContainer
                        onClick={() => {
                            setLike(!like);
                        }}
                    >
                        <S.LikeImg
                            selected={like}
                            src="/assets/OrangeLike.svg"
                        />
                        <S.LikeImg selected={!like} src="/assets/Likes.svg" />
                    </S.LikeContainer>
                    <S.TrashContainer
                        onClick={() => {
                            setTrash(!trash);
                        }}
                    >
                        <S.LikeImg selected src="/assets/Trash.svg" />
                    </S.TrashContainer>
                </S.PiuReactions>
            </S.PiusContainer>
        </>
    );
};

export default PiusTemplate;
