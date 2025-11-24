interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({
  id,
  title,
  subtitle,
  center,
}: SectionHeaderProps) {
  return (
    <header id={id} className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-body/70 text-base sm:text-lg">{subtitle}</p>
      )}
    </header>
  );
}
