import { ChevronDown, MessageCircle, VideoIcon } from 'lucide-react'
import ReactPlayer from 'react-player'

export function Player() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <header className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl">Fundamentos do Redux</h1>

            <span className="text-sm text-zinc-700">
              Módulo "Desvendando o Redux"
            </span>
          </header>

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
            <div className="aspect-video w-full bg-zinc-950">
              <ReactPlayer
                controls
                height="100%"
                src="https://www.youtube.com/watch?v=YVOqvNkums0&t=5s"
                width="100%"
              />
            </div>
          </div>

          <aside className="scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 absolute top-0 right-0 bottom-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-zinc-800 border-l bg-zinc-900">
            <div>
              <button
                className="flex w-full items-center gap-3 bg-zinc-800 p-4"
                type="button"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>

                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="ml-auto size-4" />
              </button>
            </div>
            <div>
              <button
                className="flex w-full items-center gap-3 bg-zinc-800 p-4"
                type="button"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>

                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="ml-auto size-4" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                <button
                  className="flex items-center gap-3 text-sm text-zinc-400"
                  type="button"
                >
                  <VideoIcon className="size-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
              </nav>
            </div>
            <div>
              <button
                className="flex w-full items-center gap-3 bg-zinc-800 p-4"
                type="button"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>

                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="ml-auto size-4" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                <button
                  className="flex items-center gap-3 text-sm text-zinc-400"
                  type="button"
                >
                  <VideoIcon className="size-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
              </nav>
            </div>
            <div>
              <button
                className="flex w-full items-center gap-3 bg-zinc-800 p-4"
                type="button"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
                  1
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>

                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="ml-auto size-4" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                <button
                  className="flex items-center gap-3 text-sm text-zinc-400"
                  type="button"
                >
                  <VideoIcon className="size-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}
