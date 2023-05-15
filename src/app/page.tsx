"use client"

/* eslint-disable @next/next/no-img-element */
import { IconBrandGithub, IconHeart } from '@tabler/icons-react'
import { useState } from 'react'
import ReactJson from 'react-json-view'

export default function Home() {
  const [url, setUrl] = useState("/films");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    setResult(null);
    const response = await fetch(`https://ghibli-api.vercel.app/api${url}`);
    const jsonData = await response.json();
    setResult(jsonData);
  }

  return (
    <main className="min-h-screen flex-1 w-full mx-auto">

      <div className="relative py-32 px-2 flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 to-green-400">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 leading-tight">👽 Ghibli API</h1>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-center text-gray-700 leading-tight">The Unofficial GraphQL for PokeAPI</h2>

        <div className="flex mt-6 justify-start md:justify-center xl:justify-start">
          <a
            target="_blank"
            rel="noopenner noreferrer"
            href="https://trakteer.id/mazipan"
            className="ml-2 flex gap-2 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 md:text-lg xl:text-base bg-red-100 text-red-700 shadow-md"
          >
            <IconHeart /> Support
          </a>

          <a
            target="_blank"
            rel="noopenner noreferrer"
            href="https://github.com/mazipan/ghibli-api"
            className="ml-2 rounded-lg flex gap-2 first-letter:px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 md:text-lg xl:text-base bg-gray-100 text-gray-700 shadow-md">
            <IconBrandGithub /> GitHub
          </a>

        </div>

        <div className="flex mt-2 justify-start md:justify-center xl:justify-start">
          {/*
          // eslint-disable-next-line @next/next/no-img-element */}
          <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/mazipan/ghibli-api?style=social" />
        </div>
      </div>

      <article className="w-full max-w-4xl mx-auto mt-8 mb-4 p-4">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">Try it now!</h3>

        <div className='w-full flex align-center items-center flex-nowrap mb-2 gap-2'>
          <span className='text-gray-200'>https://ghibli-api.vercel.app/api</span><span className='px-2 bg-gray-200 text-gray-700 rounded-sm'>{url}</span>
        </div>

        <div className='flex gap-2'>
          <input type="text" className='shadow appearance-none border-2 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500' value={url} onChange={(e) => {
            setUrl(e.target.value)
          }} />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline focus:border-blue-500' onClick={handleSubmit}>Submit</button>
        </div>

        <div className='mt-2'>
          Need a hint? Try
          <span className='text-blue-500 cursor-pointer' onClick={() => {
            setUrl("/films")
          }}>
            {" "}/films
          </span>,{" "}
          <span className='text-blue-500 cursor-pointer' onClick={() => {
            setUrl("/locations")
          }}>
            /locations
          </span>,{" "}
          <span className='text-blue-500 cursor-pointer' onClick={() => {
            setUrl("/people")
          }}>/people
          </span>,{" "}
          <span className='text-blue-500 cursor-pointer' onClick={() => {
            setUrl("/species")
          }}>
            /species
          </span>, or{" "}
          <span className='text-blue-500 cursor-pointer' onClick={() => {
            setUrl("/vehicles")
          }}>
            /vehicles
          </span>
        </div>

        <div className='mt-2'>
          Direct link to results: <a
            className='text-blue-500 cursor-pointer'
            target="_blank"
            rel="noopenner noreferrer"
            href="https://ghibli-api.vercel.app/api/films/2baf70d1-42bb-4437-b551-e5fed5a87abe">
            /api/films/2baf70d1-42bb-4437-b551-e5fed5a87abe
          </a>
        </div>

        <div className='mt-8'>
          {result ? (
            <>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-200">Result</h3>
              <ReactJson src={result} theme="monokai" style={{ padding: "1em", borderRadius: "0.375rem" }} />
            </>) : null}
        </div>
      </article>

      <footer className="bg-gradient-to-r from-purple-400 to-green-400">
        <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8">
          <li>
            Code by{" "}
            <a href="https://mazipan.space/" target="_blank" rel="noopenner noreferrer" className="font-bold">Irfan Maulana</a>
          </li>
          <li>
            <a href="https://github.com/mazipan/ghibli-api" target="_blank" rel="noopenner noreferrer" className="flex font-bold gap-1 items-center">
            <IconBrandGithub size="1.1rem"/>
            GitHub</a>
          </li>
        </ul>
      </footer>
    </main>
  )
}
