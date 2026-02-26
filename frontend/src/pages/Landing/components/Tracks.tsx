interface TrackCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrackCard = ({ icon, title, description }: TrackCardProps) => {
  return (
    <article className="group border-t border-zinc-800 pt-5">
      <div className="mb-5 text-zinc-400 transition-colors duration-200 group-hover:text-orange-300">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold uppercase tracking-wide text-zinc-100 transition-colors duration-200 group-hover:text-pink-300">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-300">
        {description}
      </p>
    </article>
  );
};

export default TrackCard;
