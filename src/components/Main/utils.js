export function findExpense(user) {
  const totalExpense = user.transactions.reduce(
    (total, currentExpense) => total + currentExpense.amount,
    0
  );
  const totalFriendsExpense = user.friends.reduce(
    (total, currentFriendsExpense) => total + currentFriendsExpense.amount,
    0
  );
  return {
    totalExpense,
    personalExpense: totalExpense - totalFriendsExpense,
    totalFriendsExpense,
  };
}

export function findFriends(user) {
  const totalFriends = user.friends.length;
  return { totalFriends };
}

export function findFriendRequests(user) {
  const totalFriendRequests = user.friendRequests.length;
  return { totalFriendRequests };
}
