const logger = (type, message) => {
  const time = new Date().toISOString();

  switch (type) {
    case "info":
      console.log(`ℹ️ [${time}] ${message}`);
      break;

    case "success":
      console.log(`✅ [${time}] ${message}`);
      break;

    case "error":
      console.error(`❌ [${time}] ${message}`);
      break;

    default:
      console.log(`[${time}] ${message}`);
  }
};

export default logger;