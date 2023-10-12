pm.test("При попытке создать покемона без имени должна быть ошибка", function () {
    pm.response.to.have.status(400);
});
pm.test("Тело ответа должно содержать информацию об ошибке", function () {
    pm.response.to.have.jsonBody({"message":"Отсутствует имя покемона(name)"});
});
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});