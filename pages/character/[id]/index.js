import axios from "axios"
import Link from "next/link"
import { BASE_URL } from "../../../constants/api"
import Image from "next/image"
import Heading from "../../../components/layout/Heading"

const character = ({ character }) => {

    return <>
        <Heading size="1" content={character.name} />
        <div className="flex flex-row flex-wrap gap-10 text-2xl mb-5">
            <Image src={character.image} alt={character.name} width="400px" height="400px" />
            <ul>
                <li><span className="text-green-600">Name:</span> {character.name}</li>
                <li><span className="text-green-600">Status:</span> {character.status}</li>
                <li><span className="text-green-600">Species:</span> {character.species}</li>
                <li><span className="text-green-600">Gender:</span> {character.gender}</li>
            </ul>
        </div>

        <Link href="/">&larr; Go back</Link>
    </>
}

const url = `${BASE_URL}/api/character`

export const getStaticProps = async (context) => {
    const res = await axios.get(url + `/${context.params.id}`)

    let character = res.data;

    return {
        props: {
            character
        }
    }
}

export const getStaticPaths = async () => {
    const res = await axios.get(url)

    const characters = res.data.results;
    const ids = characters.map(character => character.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default character