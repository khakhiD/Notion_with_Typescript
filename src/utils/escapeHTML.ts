export function escapeHTML(text: string): string {
  return text.replace(/[&<>"']/g, function (match: string) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[match]
  })
}
