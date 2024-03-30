export function calculateDateDuration(pickupDate: Date, returnDate: Date) {
  const duration = returnDate.getTime() - pickupDate.getTime();
  const weeks = Math.floor(duration / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(
    (duration % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  return {
    parsedDuration: `${
      weeks > 0 ? `${weeks} week${weeks > 1 ? "s" : ""}, ` : ""
    } ${days} day${days > 1 ? "s" : ""}`,
    duration: Math.round(weeks * 7 + days),
    weeks: weeks,
    days: days,
  };
}
