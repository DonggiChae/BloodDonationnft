import React from "react";

import {
  Authenticator,
  ThemeProvider,
  defaultTheme,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function SignIn() {
  const { tokens } = defaultTheme;
  const theme = {
    name: "pretty-princess",
    tokens: {
      colors: {
        brand: {
          primary: {
            10: tokens.colors.red["10"],
            20: tokens.colors.red["20"],
            40: tokens.colors.red["40"],
            60: tokens.colors.red["60"],
            80: tokens.colors.red["80"],
            90: tokens.colors.red["90"],
            100: tokens.colors.red["100"],
          },
        },
      },
      border: {
        widths: {
          small: { value: "1px" },
          medium: { value: "4px" },
          large: { value: "8px" },
        },
      },
      components: {
        tabs: {
          item: {
            active: {
              color: { value: "#d00000" },
            },
            focus: {
              color: { value: "#d00000" },
            },
            hover: {
              color: { value: "#ffba08" },
            },
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Authenticator
        loginMechanisms={["email"]}
        // socialProviders={["google"]}
        signUpAttributes={[]}
      >
        {({ signOut, user }) => {
          return (
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          );
        }}
      </Authenticator>
    </ThemeProvider>
  );
}
