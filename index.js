// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

// Пример:

// getPositiveIncomeAmount(funds) => 13300

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

// Пример:

// getTotalIncomeAmount(funds) => -500

const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
  return data.filter(item => item.amount >= 0).reduce((sum, current) => +`${typeof(sum) === "object" ? sum.amount : sum}` + current.amount)
};

const getTotalIncomeAmount = (data) => {
  return data.some(item => item.amount <= 0) ? data.reduce((acc, current) =>  acc + current.amount, 0) : getPositiveIncomeAmount(data)
};

console.log(getTotalIncomeAmount(funds))
