'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const [typeFile, setTypeFile] = useState('')

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    setTypeFile(files[0].type)

    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        accept="image/*, video/mp4, video/webm"
        id="media"
        className="hidden"
      />

      {preview &&
        (typeFile === 'video/mp4' || typeFile === 'video/webm' ? (
          // eslint-disable-next-line
            <video
            className="mt-2 aspect-video w-full rounded-lg object-cover"
            controls
          >
            <source src={preview} type={typeFile} />
          </video>
        ) : (
          // eslint-disable-next-line
          <img
            src={preview}
            alt=""
            className="mt-2 aspect-video w-full rounded-lg object-cover"
          />
        ))}
    </>
  )
}
