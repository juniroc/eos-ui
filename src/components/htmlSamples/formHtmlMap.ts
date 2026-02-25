export async function loadFormHtml(
  formCode: string
): Promise<string | null> {
  try {
    const res = await fetch(`/api/form-preview?formCode=${formCode}`);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}
