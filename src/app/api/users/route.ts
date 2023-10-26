export async function GET(
  req: Request
) {

  const users = [

    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' },
    { id: 4, name: 'Jill' }

  ];

  return Response.json(users,
    { status: 200 });

}
