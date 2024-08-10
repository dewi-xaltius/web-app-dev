import GlobalStyle from '../styles/GlobalStyles';
import Navigation from '../components/Navigation/Navigation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalStyle />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
