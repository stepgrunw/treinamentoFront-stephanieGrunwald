import styled from 'styled-components';

interface ContainerProps {
    selected: boolean;
}

interface DeleteProps {
    deletePiu: boolean;
}

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NewPiuContainer = styled.div`
    background-color: #ececec;
    border-radius: 24px;
    margin: 16px;
    height: 48px;
    width: 800px;
`;

export const PiusContainer = styled.div<DeleteProps>`
    background-color: #ececec;
    border-radius: 24px;
    margin: 16px;
    height: 80px;
    width: 800px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: ${({ deletePiu }) => (deletePiu ? 'flex' : 'none')};
`;

export const PiuText = styled.h1`
    margin: 16px;
`;

export const PiuReactions = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LikeContainer = styled.button`
    height: 24px;
    width: 24px;
    border: none;
`;

export const TrashContainer = styled.button`
    height: 24px;
    width: 24px;
    border: none;
    margin-right: 16px;
`;

export const LikeImg = styled.img<ContainerProps>`
    height: 24px;
    width: 24px;
    display: ${({ selected }) => (selected ? 'flex' : 'none')};
`;

export const PiuSendButton = styled.button`
    background-color: #fd4f00;
    height: 24px;
    width: 48px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
`;

export const PiuInput = styled.input`
    background-color: #fafafa;
`;
