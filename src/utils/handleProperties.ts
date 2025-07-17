export function handleProperties(object: object) {
  return Object.values(object).some((value: unknown) => {
    if (!value) return true;
    if (typeof value === "object") {
      if ((value as []).length < 1) return true;
      return Object.values(value).some(
        (content) => content.content?.trim() === ""
      );
    }
    return value instanceof String && value?.trim() === "";
  });
}
