const users = [
  { name: "John Doe", email: "john@example.com", password: "123456" },
  { name: "Jane Smith", email: "jane@example.com", password: "abcdef" },
  { name: "Mike Ross", email: "mike@example.com", password: "qwerty" },
];

const getAllUsers = (req, res) => {
  const Users = users.map((user) => {
    return {
      name: user.name,
      email: user.email,
    };
  });

  res.status(200).json(Users);
};

export default getAllUsers;
