import * as S from './styles';

export type NavComponentsProps = {
    title: string;
    img: string;
};

const NavComponent: React.FC<NavComponentsProps> = ({ title, img }) => (
    <S.Container>
        <S.Icon src={img} />
        <S.Title>{title}</S.Title>
    </S.Container>
);

export default NavComponent;
