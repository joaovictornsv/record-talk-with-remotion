async function getAccountEmails() {
  const userIds = await this.find({})
    .mapAsync(({ userId }) => userId);

  return UsersCollection.find(
    { _id: { $in: userIds } },
  ).mapAsync(({ email }) => email);
}
