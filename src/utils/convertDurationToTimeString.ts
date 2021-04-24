export function convertDurationToTimeString(duration: number): string {
  const MINUTO: number = 3600;
  const SEGUNDOS: number = 60;

  const hours = Math.floor(duration / MINUTO); //60*60
  const minutes = Math.floor((duration % MINUTO) / SEGUNDOS);
  const seconds = duration % SEGUNDOS;

  const timeString = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");

  return timeString;
}
