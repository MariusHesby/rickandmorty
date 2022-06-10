import Link from 'next/link'
import Image from 'next/image'

function CharacterItem({ character }) {
    return (
        <Link href="/character/[id]" as={`/character/${character.id}`}>
            <a>
                <h3>{character.name} &rarr;</h3>
                <Image src={character.image} width="300px" height="300px" alt={character.id} />

            </a>
        </Link>
    )
}

export default CharacterItem