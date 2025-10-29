interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-background z-10">
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold">{title}</p>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </header>
  );
}
