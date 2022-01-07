import 'styled-components';
interface IPalette {
  main: string;
  contrastText: string;
  borderColor: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    primaryFont: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
