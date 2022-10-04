import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import { Server } from "socket.io";

// Socket Plugin Configuration
export const webSocketServer = {
  name: "webSocketServer",
  configureServer(server) {
    const io = new Server(server.httpServer);

    io.on("connect", (socket) => {
      socket.emit("eventFromServer", "Hello World");
    });
  },
};

const config: UserConfig = {
  plugins: [sveltekit(), webSocketServer],
};

export default config;
