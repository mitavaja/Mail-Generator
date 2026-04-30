import Message from "../models/Message.js";

// 📥 Get inbox messages
export const getInbox = async (req, res) => {
  try {
    const { email } = req.params;

    const messages = await Message.find({ to: email })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: messages.length,
      messages
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// 🗑️ Delete message
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    await Message.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Message deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};