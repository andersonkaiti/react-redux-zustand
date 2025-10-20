import {
  CollapsibleContent,
  CollapsibleTrigger,
  Root,
} from '@radix-ui/react-collapsible'
import { useAppSelector } from '@store/index'
import { ChevronDown } from 'lucide-react'
import { Lesson } from './lesson'

interface IModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: IModuleProps) {
  const lessons = useAppSelector(
    (store) => store.player.course.modules[moduleIndex].lessons
  )

  return (
    <Root className="group">
      <CollapsibleTrigger
        className="flex w-full cursor-pointer items-center gap-3 bg-zinc-800 p-4"
        type="button"
      >
        <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>

          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="ml-auto size-4 transition group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons?.map((lesson) => (
            <Lesson
              duration={lesson.duration}
              key={lesson.id}
              title={lesson.title}
            />
          ))}
        </nav>
      </CollapsibleContent>
    </Root>
  )
}
