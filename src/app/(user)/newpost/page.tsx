"use client"
import { OutputData } from '@editorjs/editorjs'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'


const EditorBlock = dynamic(() => import('@/lib/functions/editor'), {
	ssr: false,
})

const Home: NextPage = () => {
	const [data, setData] = useState<OutputData>()
	return (
   <div className=' bg-aside rounded-lg p-3 py-12 sm:px-6'>
     <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
   </div>
	)
}

export default Home
