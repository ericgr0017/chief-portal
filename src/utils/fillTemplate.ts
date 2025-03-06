export function fillTemplate(template: string, data: Record<string, string>) {
  let output = template;
  for (const key in data) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    output = output.replace(regex, data[key]);
  }
  return output;
} 