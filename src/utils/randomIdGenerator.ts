export default function randomIdGenerator(): string | undefined {
  let id = "";
  const alphabet = [
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)),
  ];
  while (id.length < 5) {
    if (Math.round(Math.random() * 10) > 5) {
      id += alphabet[Math.round(Math.random() * 52)];
    } else {
      id += Math.floor(Math.random() * 9).toString();
    }
  }
  return id;
}
