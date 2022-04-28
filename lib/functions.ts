export const formatMoney = (
  num: number,
  minimumFractionDigits: number | undefined = 2,
  useGrouping = true,
  minimumIntegerDigits: number | undefined = undefined
): string => num.toLocaleString("us", { useGrouping, minimumIntegerDigits, minimumFractionDigits });

export const getInitials = (firstName: string, lastName: string | null) => {
  let initials = "";
  initials += firstName.trim()[0];
  if (lastName && lastName.trim()) {
    initials += lastName.trim()[0];
  }

  return initials.toUpperCase();
};

export const getInitialsFromFullName = (fullName?: string | null) => {
  let initials = "";

  let words = fullName ? fullName.trim().split(" ") : [];

  if (words.length == 1) {
    initials = getInitials(words[0], null);
  } else if (words.length == 2) {
    initials = getInitials(words[0], words[1]);
  } else if (words.length == 3) {
    initials = getInitials(words[0], words[1]);
    initials += words[2][0];
  } else if (words.length > 3) {
    initials = getInitials(words[0], words[1]);
    initials += words[words.length - 1][0];
  }

  return initials.toUpperCase();
};
