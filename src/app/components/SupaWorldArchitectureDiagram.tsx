interface SupaWorldArchitectureDiagramProps {
  compact?: boolean;
  className?: string;
}

export function SupaWorldArchitectureDiagram({
  compact = false,
  className = '',
}: SupaWorldArchitectureDiagramProps) {
  const textSize = compact ? 'text-[9px] sm:text-[10px]' : 'text-xs sm:text-sm';
  const nodePad = compact ? 'px-2 py-1' : 'px-3 py-1.5';
  const gap = compact ? 'gap-2' : 'gap-3';

  const node = (label: string, accent: 'gold' | 'emerald' | 'cyan' = 'gold') => {
    const colors = {
      gold: 'border-[#FFD700]/40 bg-[#FFD700]/10 text-[#FFD700]',
      emerald: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
      cyan: 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200',
    };

    return (
      <div
        className={`rounded border font-mono ${textSize} ${nodePad} ${colors[accent]} whitespace-nowrap`}
      >
        {label}
      </div>
    );
  };

  const line = (height = compact ? 'h-4' : 'h-6') => (
    <div className={`mx-auto w-px ${height} bg-gradient-to-b from-[#FFD700]/50 to-[#FFD700]/15`} />
  );

  const hLine = () => (
    <div className={`h-px flex-1 bg-gradient-to-r from-transparent via-[#FFD700]/35 to-transparent`} />
  );

  return (
    <div
      className={`rounded-xl border border-[#FFD700]/20 bg-[#050505]/90 p-4 sm:p-6 font-mono ${className}`}
    >
      <div className={`flex flex-col items-center ${gap}`}>
        {node('SUPA WORLD', 'emerald')}
        {line()}
        <div className={`flex w-full max-w-2xl items-center justify-center ${compact ? 'gap-2' : 'gap-4'}`}>
          {hLine()}
          {node('Villagers', 'cyan')}
          {hLine()}
          {node('Animals', 'cyan')}
          {hLine()}
          {node('World', 'cyan')}
          {hLine()}
        </div>
        {line()}
        <div className={`flex w-full max-w-2xl items-center justify-center ${compact ? 'gap-2' : 'gap-4'}`}>
          {hLine()}
          {node('Utility AI')}
          {hLine()}
          {node('Behavior Rules')}
          {hLine()}
          {node('Resources')}
          {hLine()}
        </div>
        {line('h-5')}
        {node('World State', 'emerald')}
        {line()}
        <div className={`flex items-center ${compact ? 'gap-6' : 'gap-10'}`}>
          {node('Save/Load')}
          {node('History')}
        </div>
        {line()}
        {node('External Interface', 'cyan')}
        {line()}
        <div className={`flex items-center ${compact ? 'gap-6' : 'gap-10'}`}>
          {node('Cybo')}
          {node('LLM')}
        </div>
      </div>
    </div>
  );
}
