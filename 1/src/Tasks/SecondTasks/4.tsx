type Coordinates = {
  x: number;
  y: number;
};

interface ICoordinates {
  x: number;
  y: number;
}

type Point3D = Coordinates & { z: number };

interface IPoint3D extends ICoordinates {
  z: number;
}

function FTask2() {
  const point3D: Point3D = { x: 1, y: 2, z: 3 };

  const iPoint3D: IPoint3D = { x: 1, y: 2, z: 3 };
  return (
    <>
      <hr />
      <div>Тип с присваиванием интерфейса</div>
      <strong>Точка X: {point3D.x}</strong>
      <strong>Точка Y: {point3D.y}</strong>
      <strong>Точка X: {point3D.z}</strong>
      <div>интерфейс с присваиванием интерфейса</div>
      <strong>Точка X: {iPoint3D.x}</strong>
      <strong>Точка Y: {iPoint3D.y}</strong>
      <strong>Точка X: {iPoint3D.z}</strong>
    </>
  );
}
export default FTask2;
