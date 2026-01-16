function ThirdTask() {
  let data: any = 123;
  data = "123";
  let dataU: unknown = 123;
  dataU = "123";
  return (
    <>
      <hr />
      {/* С числом будт ошибка в рантайм */}
      {/* А со строкой всё работает */}
      <div>Вызов с any: {data.toUpperCase()}</div>
      <div>Вызов с unknown: без явного типа невозможно вызвать</div>
    </>
  );
}

export default ThirdTask;
