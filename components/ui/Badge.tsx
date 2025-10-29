import { cn } from '@/lib/utils';
import { NivelAlerta } from '@/lib/types';
import { getNivelAlertaColor } from '@/lib/utils';

interface BadgeProps {
  nivel: NivelAlerta;
  children: React.ReactNode;
}

export function Badge({ nivel, children }: BadgeProps) {
  const colors = getNivelAlertaColor(nivel);

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        colors.bg,
        colors.text
      )}
    >
      {children}
    </span>
  );
}