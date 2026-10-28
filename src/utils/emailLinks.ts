/**
 * Utility to generate direct Gmail web compose links
 * Redirects email actions straight to Gmail rather than triggering desktop clients like Outlook.
 */

export const createGmailComposeUrl = (
  to: string,
  subject?: string,
  body?: string
): string => {
  const params = new URLSearchParams();
  params.set('view', 'cm');
  params.set('fs', '1');
  params.set('to', to);
  if (subject) {
    params.set('su', subject);
  }
  if (body) {
    params.set('body', body);
  }
  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const openGmailCompose = (
  to: string,
  subject?: string,
  body?: string
): void => {
  const url = createGmailComposeUrl(to, subject, body);
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
