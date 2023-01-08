import React from "react";
import {
  Authenticator,
  ThemeProvider,
  defaultTheme,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import styled from "styled-components";
import Button from "../atoms/Button";

const Wrapper = styled.div`
  margin-top: 20px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  width: 500px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 30px;
`;
const Content = styled.div`
  margin: 20px;
`;

export default function SignIn() {
  const { user } = useAuthenticator((context) => [context.user]);
  console.log(user.attributes.preferred_username);

  const formFields = {
    signUp: {
      email: {
        order: 1,
      },
      family_name: {
        order: 2,
      },
      preferred_username: {
        order: 4,
      },
      birthdate: {
        order: 3,
      },
      password: {
        order: 5,
      },
      confirm_password: {
        order: 6,
      },
    },
  };
  const signUpAttributes = ["birthdate", "family_name", "preferred_username"];

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
        formFields={formFields}
        // socialProviders={["google"]}
        signUpAttributes={signUpAttributes}
      >
        {({ signOut, user }) => {
          return (
            <Wrapper>
              <Content>
                {user.attributes.preferred_username}님 로그인 되었습니다.
              </Content>
              <Button onClick={signOut} title="Sign out" />
            </Wrapper>
          );
        }}
      </Authenticator>
    </ThemeProvider>
  );
}
