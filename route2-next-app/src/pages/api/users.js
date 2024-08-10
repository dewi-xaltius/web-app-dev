export default function handler(req, res) {
    // Sample data: list of users
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    ];
  
    // Send the users data as a JSON response
    res.status(200).json(users);
  }
  