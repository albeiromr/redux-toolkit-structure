import PhotoService from "../services/photo.service";

test("debe retornar el objeto específico",  async () => {
    const photoInformation = await PhotoService.getPhotoById(19);
    expect(photoInformation). toMatchObject({
        albumId: 1,
        id: 19,
        title: 'perferendis nesciunt eveniet et optio a',
        url: 'https://via.placeholder.com/600/56acb2',
        thumbnailUrl: 'https://via.placeholder.com/150/56acb2'
    });
});

test("El resultado no debe ser indefinido",  async () => {
    const photoInformation = await PhotoService.getPhotoById(50);
    expect(photoInformation).toBeDefined();
});

test("El resultado debe ser nulo",  async () => {
    const photoInformation = await PhotoService.getPhotoById(5001);
    expect(photoInformation).toBeNull();
});

test("El resultado debe ser nulo si se pasa un string en lugar de un número",  async () => {
    const photoInformation = await PhotoService.getPhotoById("abs");
    expect(photoInformation).toBeNull();
});

test("El resultado debe ser nulo no se pasan parametros a la función",  async () => {
    const photoInformation = await PhotoService.getPhotoById();
    expect(photoInformation).toBeNull();
});

