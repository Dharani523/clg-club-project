require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

// Connect DB
connectDB();

const app = express();
const server = http.createServer(app);

// --- SOCKET.IO SETUP ---
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: { origin: process.env.FRONTEND_URL || "*" },
});
app.set("io", io);

// --- MIDDLEWARES ---
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
  })
);
app.use(express.json({ limit: "10mb" }));

// --- API ROUTES ---
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/clubs", require("./routes/clubs.routes"));
app.use("/api/events", require("./routes/events.routes"));
app.use("/api/announcements", require("./routes/announcements.routes"));
app.use("/api/registrations", require("./routes/registrations.routes"));
app.use("/api/uploads", require("./routes/uploads.routes")); // upload route

// --- SOCKET NAMESPACE: CHAT ---
io.of("/chat").on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  // Join club/event chat room
  socket.on("joinRoom", ({ room }) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  // Message Event
  socket.on("message", async (payload) => {
    try {
      const ChatMessage = require("./models/chatMessage.model");
      const message = new ChatMessage(payload);

      await message.save();

      // Broadcast to same room
      io.of("/chat").to(payload.roomId).emit("message", message);
    } catch (err) {
      console.error("Chat error:", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

// --- GLOBAL ERROR HANDLER ---
app.use(errorHandler);

// --- START SERVER ---
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Backend server running on port ${PORT}`));
