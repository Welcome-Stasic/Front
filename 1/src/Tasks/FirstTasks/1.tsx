interface Address {
  city: string;
  country: string;
}

function FirstTask() {
  let age: number = 123;
  let name: string = "Стас";
  let isStudent: boolean = true;
  let hobbies: string[] = ["Спорт", "Программирование", "Игры"];
  const address: Address = {
    city: "Москва",
    country: "Россия",
  };
  return (
    <>
      <div>Возраст: {age}</div>
      <div>Имя: {name}</div>
      <div>Студент: {isStudent ? "Да" : "Нет"}</div>
      <div>
        Хобби:{" "}
        {hobbies.map((h, index) => (
          <div key={index}>{h}</div>
        ))}
      </div>
      <div>
        Город: {address.city}, Страна: {address.country}
      </div>
    </>
  );
}
export default FirstTask;
