export default function convertToHour(value: number): string {
  const hours = (value / 60);
  const roundedHours = Math.floor(hours);
  const minutes = (hours - roundedHours) * 60;
  const roundedMinutes = Math.round(minutes);
  return `${roundedHours}h ${roundedMinutes}m`;
}
