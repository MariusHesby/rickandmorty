// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { BASE_URL } from "../constants/api"
import Heading from "../components/layout/Heading"
import { CharacterList } from "../components/content/CharacterList"
import axios from 'axios';

export default function Home({ characters }) {

  return (
    <>
      <Heading size="1" content="Characters" />
      <div className="flex flex-row flex-wrap gap-10">
        <CharacterList characters={characters} />
      </div>
    </>
  )
}
const url = `${BASE_URL}/api/character`

export const getStaticProps = async () => {
  let characters = [];
  const response = await axios.get(url)
  characters = response.data.results;

  return {
    props: {
      characters
    }
  }
}