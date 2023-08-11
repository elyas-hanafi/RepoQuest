export const metadata = {
  title: 'RepoQuest',
  description: 'Generated by create next app',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0 }}>{children}</body>
    </html>
  );
}
