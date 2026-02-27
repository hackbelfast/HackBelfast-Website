interface TrackCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrackCard = ({ icon, title, description }: TrackCardProps) => {
  return (
    <article className="group relative min-h-[21rem] bg-zinc-950/72 transition-colors duration-300 hover:bg-zinc-900/86">
      <div className="h-full px-7 py-9 md:px-10 md:py-11">
        <div className="mb-5 inline-flex bg-zinc-950/85 p-3 text-zinc-400 transition-colors duration-300 group-hover:text-orange-300">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold uppercase tracking-wide text-zinc-100 transition-colors duration-300 group-hover:text-pink-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">
          {description}
        </p>
      </div>
    </article>
  );
};

export default TrackCard;
