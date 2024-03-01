"use client"
import { tags } from '@/lib/const/navigation'
import clsx from 'clsx'
import React, { useState } from 'react'

export default function FilterTags() {
  
	const [tagSelected, setTagSelected] = useState('all')
  return (
    <div
    title="tags"
    className="flex w-full overflow-hidden sm:max-w-[150px] h-fit"
  >
    <div className="flex gap-3 w-full overflow-x-scroll sm:flex-col sm:overflow-x-hidden">
      {tags.map((tag, index) => (
        <h5
          className={clsx(
            'px-4 py-3 w-fit h-fit rounded-xl cursor-pointer sm:w-full capitalize',
            tag.title == tagSelected
              ? 'bg-active'
              : 'body2 hover:bg-hover'
          )}
          key={index.toString()}
          onClick={() => setTagSelected(tag.title)}
        >
          {tag.title}
        </h5>
      ))}
    </div>
  </div>
  )
}
