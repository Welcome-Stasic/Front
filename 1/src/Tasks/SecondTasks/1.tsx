function FirstTask2() {
  function formatId(id: number | string): string {
    return `ID: ${id}`;
  }
  return (
    <>
      <div>Число id: {formatId(123)}</div>
      <div>Сторка id: {formatId("ABC-456")}</div>
    </>
  );
}
export default FirstTask2;
