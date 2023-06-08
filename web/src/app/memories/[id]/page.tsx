import { ChevronLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Image from 'next/image'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { EmptyMemories } from '@/app/components/EmptyMemories'
dayjs.locale(ptBr)

interface PageProps {
  params: {
    id: string
  }
}

interface MemorySchema {
  coverUrl: string
  content: string
  createdAt: string
}

export default async function Memory({ params }: PageProps) {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const response = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory: MemorySchema = response.data

  return (
    <div className="flex flex-1 flex-col gap-4 p-8 sm:p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 transition-colors hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timelime
      </Link>
      <div className="space-y-4">
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
        </time>
        <Image
          src={memory.coverUrl}
          alt=""
          width={592}
          height={280}
          className="aspect-video w-full rounded-lg object-cover"
        />
        <p className="text-lg leading-relaxed text-gray-100">
          {memory.content}
        </p>
      </div>
    </div>
  )
}
