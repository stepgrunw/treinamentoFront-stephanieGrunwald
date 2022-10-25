import * as S from './styles';

export type TrendBoxProps = {
    number: string;
};

const TrendBox: React.FC<TrendBoxProps> = ({ number }) => (
    <S.Trending>
        <S.TrendingTitle>TRENDING #{number}</S.TrendingTitle>
        <S.TrendingDescription>INFO SOBRE</S.TrendingDescription>
    </S.Trending>
);

export default TrendBox;
