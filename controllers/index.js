const awesomePerson = (req, res, next) => {
  res.json('Mariana Machado');
}

const test = (req, res, next) => {
  res.json('Testing another route');
}

module.exports = { awesomePerson, test };