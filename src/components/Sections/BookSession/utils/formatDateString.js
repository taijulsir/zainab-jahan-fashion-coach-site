export function formatDateToLocalString(date) {
  const options = {
    weekday: "short", // Tue
    month: "short", // Feb
    day: "numeric", // 21
    year: "numeric", // 2025
    hour: "2-digit", // 14
    minute: "2-digit", // 30
    hour12: true, // AM/PM format
  };

  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}
