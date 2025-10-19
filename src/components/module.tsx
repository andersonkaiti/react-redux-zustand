import { ChevronDown } from 'lucide-react'
import { Lesson } from './lesson'

interface IModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: IModuleProps) {
  return (
    <div>
      <button
        className="flex w-full items-center gap-3 bg-zinc-800 p-4"
        type="button"
      >
        <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>

          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="ml-auto size-4" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson duration="10:00" title="Introdução ao Redux" />

        <Lesson duration="08:32" title="Configuração Inicial" />

        <Lesson duration="12:47" title="Primeira Store" />
      </nav>
    </div>
  )
}
