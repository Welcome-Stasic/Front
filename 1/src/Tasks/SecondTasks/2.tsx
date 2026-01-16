type User = {
  id: number | string;
  name: string;
  email?: string;
};

function SecondTask2() {
  const currentUser: User = {
    id: 1,
    name: "Иван Иванов",
    email: "ivan@gmail.com",
  };

  return (
    <>
      <hr />
      <div>ID: {currentUser.id}</div>
      <div>Имя: {currentUser.name}</div>
      <div>E-mail: {currentUser.email}</div>
    </>
  );
}
export default SecondTask2;
