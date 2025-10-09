import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Permissions {
  "web-applications": string[];
  sms: string[];
  rbac: string[];
  users: string[];
  accounts: string[];
  "api-users": string[];
  "live-calls": string[];
  "resource-servers": string[];
  "cdr": string[];
}

export interface Session {
  sessionData:
    | {
        email: string;
        accountID: string;
        firstName: string;
        lastName: string;
        permissions: Permissions;
        sessionExpires: string;
        trustedDevice: boolean;
      }
    | undefined;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: Session | null = {
  sessionData: undefined,
  isAuthenticated: false,
  loading: true
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionData(state, action: PayloadAction<Session>) {
        state.sessionData = action.payload.sessionData;
        state.isAuthenticated = action.payload.isAuthenticated;
        state.loading = false
    },
    clearSessionData(state) {
      return initialState;
    },
  },
});

export const { setSessionData, clearSessionData } = sessionSlice.actions;
export default sessionSlice.reducer;
