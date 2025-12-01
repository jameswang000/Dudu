import styles from "./CharacterInformationPopup.module.css";

interface CharacterInformationPopupProps {
  character: string;
  cellWidth: number;
}
const CharacterInformationPopup = ({
  character,
  cellWidth,
}: CharacterInformationPopupProps) => {
  return (
    <div
      className={styles.characterInformationPopupContainer}
      style={{
        transform: `translate(calc(-50% + ${cellWidth / 2}px), ${
          cellWidth * 1.5
        }px)`,
      }}
    >
      Hello World!
    </div>
  );
};

export default CharacterInformationPopup;
