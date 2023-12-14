async function getAccountEmails() {
  const userIds = await this.find({})
    .fetch().map(({ userId }) => userId);

  return UsersCollection.find(
    { _id: { $in: userIds } },
  ).fetch().map(({ email }) => email);
}
