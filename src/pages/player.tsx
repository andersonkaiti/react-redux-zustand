import { Header } from '@components/header'
import { Module } from '@components/module'
import { Video } from '@components/video'
import { MessageCircle } from 'lucide-react'

export function Player() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button
            className="flex cursor-pointer items-center gap-2 rounded bg-violet-500 px-3 py-2 font-medium text-sm text-white hover:bg-violet-600"
            type="button"
          >
            <MessageCircle className="size-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 absolute top-0 right-0 bottom-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-zinc-800 border-l bg-zinc-900">
            <Module
              amountOfLessons={3}
              moduleIndex={0}
              title="Desvendando o Redux"
            />

            <Module
              amountOfLessons={3}
              moduleIndex={1}
              title="Desvendando o Redux"
            />

            <Module
              amountOfLessons={3}
              moduleIndex={2}
              title="Desvendando o Redux"
            />
          </aside>
        </main>
      </div>
    </div>
  )
}
