import { useAppSelector } from '@store/index'
import ReactPlayer from 'react-player'

export function Video() {
  const lesson = useAppSelector((store) => {
    const { currentModuleIndex, currentLessonIndex } = store.player

    const currentLesson =
      store.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        controls
        height="100%"
        src={`https://www.youtube.com/watch?v=${lesson.id}`}
        width="100%"
      />
    </div>
  )
}
