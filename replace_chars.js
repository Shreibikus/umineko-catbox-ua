// This script replaces unusual (non-English) characters with their Unicode values.
// Used during translations to other languages.

const fs = require('fs')

const intlCharacters = [ // List all of your language's non-Latin chars here.
  'А',
  'Б',
  'В',
  'Г',
  'Ґ',
  'Д',
  'Е',
  'Є',
  'Ж',
  'З',
  'И',
  'І',
  'Ї',
  'Й',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ь',
  'Ю',
  'Я',
  'а',
  'б',
  'в',
  'г',
  'ґ',
  'д',
  'е',
  'є',
  'ж',
  'з',
  'и',
  'і',
  'ї',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
  'щ',
  'ь',
  'ю',
  'я',
  '«',
  '»'
]

let script = fs.readFileSync('script.rb', 'utf-8')

for (const character of intlCharacters) {
  const code = character.codePointAt()
  script = script.replaceAll(character, `@u${code}.`)
}

fs.writeFileSync('script.rb', script)
