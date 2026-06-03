// login
export const login = async (req, res) => {
  console.log("hi log");
};

// register
export const register = async (req, res) => {
  const { name, email, password, bio } = req.body;
  const profileImg = req.file?.filename;

  if (!name || !email || !password || !bio) {
    return res.status(400).json({
      success: false,
      message: "Required fields are missing",
    });

    try {
    } catch (error) {}
  }
};
