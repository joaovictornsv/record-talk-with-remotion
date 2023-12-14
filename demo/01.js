function getAccountEmails() {
  const userIds = this.find({})
    .fetch().map(({ userId }) => userId);

  return UsersCollection.find(
    { _id: { $in: userIds } },
  ).fetch().map(({ email }) => email);
}
