import CharacterItem from "./CharacterItem"


export const CharacterList = ({ characters }) => {
    return (
        <>
            {characters.map((character) => (
                <>
                    <CharacterItem character={character} />
                </>
            ))}
        </>
    )
}
