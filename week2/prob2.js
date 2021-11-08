const fs = require('fs');

const textbook = {
    subject: '일반물리2',
    title: 'University Physics',
    author: ['Hugh Young', 'Roger Freedman', 'Francis Sears', 'Mark Zemansky'],
    publisher: 'Person Education',
    publication: '1949',
    ISBN: '978-0-321-50062-5'
}

const bookJSON = JSON.stringify(textbook)
fs.writeFileSync('textbook.json',bookJSON)