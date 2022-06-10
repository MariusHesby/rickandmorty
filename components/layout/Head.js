import PropTypes from "prop-types";
import NextHead from "next/head";

export default function Head({ title = "" }) {
    return (
        <NextHead>
            <title>
                {title}
                {title ? " | " : ""}Rick and Morty API
            </title>
            <meta name="description" content="JS Frameworks Course Assignment: Rick and Morty API" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Rock+3D&display=swap" rel="stylesheet" />
        </NextHead>
    );
}

Head.propTypes = {
    title: PropTypes.string,
};