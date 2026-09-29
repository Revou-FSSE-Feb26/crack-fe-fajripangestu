export async function getUsers() {
  const res = await fetch(`${process.env.DATABASE_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}
