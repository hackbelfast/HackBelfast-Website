interface TrackCardProps {
  icon: string
  title: string
  description: string
  gradient: string
}

const TrackCard = ({ icon, title, description, gradient }: TrackCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 p-6 transition-all duration-300 hover:border-transparent hover:shadow-2xl">
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

      <div className="relative z-10">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Animated border gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
    </div>
  )
}

export default TrackCard