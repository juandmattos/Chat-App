const users = []

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  if (!username || !room) {
    return {
      error: 'Username are Room are required!'
    }
  }

  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })

  if (existingUser) {
    return {
      error: 'Username is in use!'
    }
  }

  const user = {
    id,
    username,
    room
  }
  users.push(user)
  return {
    user
  }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id)
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  const index = users.findIndex((user) => user.id === id)
  return users[index]
}

const getUsersInRoom = (room) => {
  const usersInRoom = []
  room = room.trim().toLowerCase()
  users.forEach((user) => {
    if (user.room === room) {
      usersInRoom.push(user)
    }
  })
  return usersInRoom
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}
