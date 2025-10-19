import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        controls
        height="100%"
        src="https://www.youtube.com/watch?v=YVOqvNkums0&t=5s"
        width="100%"
      />
    </div>
  )
}
