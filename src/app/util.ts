export function getTextSettings(
  size: string = '50px',
  color: string = 'white',
  positioning:
    | 'middle center'
    | 'middle left'
    | 'middle right' = 'middle center',
  font: string = "'Operator Mono Lig', 'Fira Code', monospace"
) {
  return {
    color,
    positioning,
    font: `${size} ${font}`
  };
}
