import Cookies from "js-cookie";
import { useEffect, useMemo } from "react";
import io from "socket.io-client";
import debugModule from "debug";
import { useCookies } from "react-cookie";

const debug = debugModule("dataphone:socket");

export const useSocket = ({
  socketUrl,
  path,
  query
}: {
  socketUrl: string;
  path: string;
  query?: { [key: string]: any };
}) => {
  const [cookies] = useCookies(["sid"]);

  useEffect(() => {
    if (cookies.sid) {
      refreshToken(cookies.sid);
    }
  }, [cookies.sid]);


  const socketClient = useMemo(() => {
    const socket = io(socketUrl, {
      auth: {
        token: Cookies.get("sid"),
        accountID: Cookies.get('last_account_id')
      },
      path,
      query
    });

    socket.io.on("reconnect_attempt", () => {
      socket.auth = { token: Cookies.get("sid") };
      debug("reconnecting socket");
    });

    return socket;
  }, [path, socketUrl]);

  const refreshToken = async (jwtToken: string) => {
    if (socketClient && socketClient.connected) {
      debug("emitting refresh token");
      socketClient.emit("refresh-token", jwtToken);
    }
  };

  const changeAccount = (accountID: string) => {
    debug("changing account to %s", accountID);
    if (socketClient && socketClient.connected) {
      socketClient.emit("change-account", accountID);
    }
  };

  return { socket: socketClient, changeAccount };
};
