interface CharacterTokenProps {
  isEnglishLike: boolean;
  value: string;
}

const CharacterToken = ({ isEnglishLike, value }: CharacterTokenProps) => {
  if (isEnglishLike) {
    return <div>{value}</div>;
  }

  return <div>{value}</div>;
};

export default CharacterToken;
