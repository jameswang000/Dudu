import styles from "./CharacterInformationPopup.module.css";
import cedict from "cc-cedict";
import { convert } from "pinyin-pro";

interface CharacterInformationPopupProps {
  character: string;
  cellWidth: number;
}

const CharacterInformationPopup = ({
  character,
  cellWidth,
}: CharacterInformationPopupProps) => {
  let characterInfo;
  // Try simplified first
  characterInfo = cedict.getBySimplified(character, null, {
    mergeCases: true,
    asObject: false,
    allowVariants: false,
  });
  if (characterInfo === undefined) {
    characterInfo = cedict.getByTraditional(character, null, {
      mergeCases: true,
      asObject: false,
      allowVariants: false,
    });
  }

  if (
    !Array.isArray(characterInfo) ||
    !characterInfo ||
    characterInfo.length === 0
  ) {
    console.log("Is undefined!");
    return (
      <div
        className={styles.characterInformationPopupContainer}
        style={{
          transform: `translate(calc(-50% + ${cellWidth / 2}px), ${
            cellWidth * 1.5
          }px)`,
        }}
      >
        Sorry, no information is available for this character.
      </div>
    );
  }

  const characterEntry = characterInfo[0];

  const pinyin = convert(characterEntry.pinyin);
  const englishTranslations: string[] = characterEntry.english;

  return (
    <div
      className={styles.characterInformationPopupContainer}
      style={{
        transform: `translate(calc(-50% + ${cellWidth / 2}px), ${
          cellWidth * 1.5
        }px)`,
      }}
    >
      <h1
        className={styles.characterInformationPopupHeader}
      >{`${characterEntry.simplified}: ${pinyin}`}</h1>
      <ol className={styles.characterInformationPopupDefinitionsList}>
        {englishTranslations.map((translation) => {
          return (
            <li className={styles.characterInformationPopupDefinition}>
              {translation}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default CharacterInformationPopup;
