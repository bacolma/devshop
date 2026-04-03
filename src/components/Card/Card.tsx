export function Card({ children }: { children: React.ReactNode }) {
  return (
    <article
      className="
        cursor-pointer
        bg-white
        rounded-xl
        border
        p-5
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
      "
    >
      {children}
    </article>
  );
}