import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      background: string;
      text: string;
      textSecondary: string;
      textInactive: string;
      primary: string;
      backgroundSecondary: string;
      shadow: string;
      tileBg: string;
      textAction: string;
      lightBorder: string;
    };
  }
}
