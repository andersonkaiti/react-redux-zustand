import { MessageCircle } from 'lucide-react'

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

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">Vídeo</div>

          <aside className="h-[600px] w-80 border-zinc-800 border-l bg-zinc-900">
            Módulos
          </aside>
        </main>
      </div>
    </div>
  )
}
