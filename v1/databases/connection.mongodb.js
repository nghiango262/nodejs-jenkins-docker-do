import mongoose from "mongoose";
import log from "../utils/logger";

// Build the connection string
const dbURI =
  "mongodb+srv://kaka:8WYMfqeRy7cKSa@cluster0.gr4nd.mongodb.net/booking?retryWrites=true&w=majority";
//const dbURI = `mongodb://${db.user}:${encodeURIComponent(db.password)}@${db.host}:${db.port}/${db.name}`;

const options = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  autoIndex: true,
  // poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  // bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

// Create the database connection
mongoose
  .connect(dbURI, options)
  .then(() => {
    log.info("Mongoose connection done");
  })
  .catch((e) => {
    log.info("Mongoose connection error");
    log.info(e);
  });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
  log.info("Mongoose default connection open to " + dbURI);
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
  log.info("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  log.info("Mongoose default connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    log.info(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
