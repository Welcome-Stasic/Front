interface Book {
  readonly title: string;
  author: string;
  year?: number;
}

interface DigitalBook extends Book {
  format: "pdf" | "epub";
}

function ThirdTask2() {
  const Book: DigitalBook = {
    title: "TypeScript для чайников",
    author: "Игорь Морозов",
    year: 2024,
    format: "pdf",
  };

  return (
    <>
      <hr />
      <div>Название книги: {Book.title}</div>
      <div>Автор: {Book.author}</div>
      <div>Год: {Book.year}</div>
      <div>Формат: {Book.format}</div>
    </>
  );
}
export default ThirdTask2;
