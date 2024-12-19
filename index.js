/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  // статичне поле count, яке відслідковує кількість музикантів, початкове значення 0
  static count = 0;
  // Об'являємо приватні поля #name; #instrument;
  #name
  #instrument

  constructor(name, instrument) {
    // Конструктор приймає два параметри: name та instrument
    // присвоєння вхідного значення name до приватного поля #name
    this.#name = name
    // присвоєння вхідного значення instrument до приватного поля #instrument
    this.#instrument = instrument
    // збільшення значення статичного поля на 1
    Musician.count += 1
  }

  get name() {
    // гетер для приватного поля #name
    return this.#name
    // повертає значення приватного поля #name
  }

  get instrument() {
    // гетер для приватного поля #instrument
    return this.#instrument
    // повертає значення приватного поля #instrument
  }

  set name(newName) {
    // сетер для приватного поля #name
    this.#name = newName
    // присвоює нове значення приватному полю #name
  }

  set instrument(newInstrument) {
    // сетер для приватного поля #instrument
    this.#instrument = newInstrument
    // присвоює нове значення приватному полю #instrument
  }

  play() {
    console.log(`${this.#name} грає на ${this.#instrument}`)
    // метод, що виводить рядок в консоль <#name> грає на <#instrument>
  }
}

/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  // Об'являємо приватні поля #band;
  #band
  // Конструктор приймає три параметри: name, instrument та band
  constructor (name, instrument, band) {
    // виклик конструктора батьківського класу super з двома параметрами name, instrument
    super(name, instrument)
    // присвоєння вхідного значення band до приватного поля #band
    this.#band = band
  }
  // гетер для приватного поля #band
  get band() {
  // повертає значення приватного поля #band
    return this.#band
  }
  // сетер для приватного поля #band
  set band(value) {
  // присвоює нове значення приватному полю #band
    this.#band = value
  }
  // метод joinBand, що змінює значення #band, this.#band = band
  joinBand(band) {
    this.#band = band
  }
  // перевизначений метод play(), що виводить рядок в консоль ${super.name} грає на ${super.instrument} в групі ${this.#band}
  play() {
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`)
  }
}

/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Bassist extends Musician {
  // Об'являємо приватні поля  #band;
  #band
  // Конструктор приймає три параметри: name, instrument та band
  constructor (name, instrument, band) {
    super(name, instrument)
    // виклик конструктора батьківського класу super з двома параметрами name, instrument
    this.#band = band
    // присвоєння вхідного значення band до приватного поля #band
  }
  get band() {
  // гетер для приватного поля #band
    return this.#band
    // повертає значення приватного поля #band
  }

  set band (newBand) {
  // сетер для приватного поля #band
  this.#band = newBand
  // присвоює нове значення приватному полю #band
  }
  // метод joinBand, що змінює значення #band,this.#band = band
  joinBand(band) {
    this.#band = band
  }
  // перевизначений метод play(), що виводить рядок в консоль ${super.name} грає на ${super.instrument} в групі ${this.#band}
  play() {
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`)
  }
}

// Тут ми використовуємо Object.defineProperty(), щоб додати сетер band до класу Musician після його створення.
Object.defineProperty(Musician.prototype, 'band', {
    set: function (newBand) {
      this._band = newBand
    }
})
// Перший аргумент - це об'єкт, до якого ми хочемо додати властивість. У цьому випадку це Musician.prototype,
// тому що ми хочемо додати сетер до всіх екземплярів класу Musician.
// Другий аргумент - це ім'я властивості, яку ми хочемо додати. У цьому випадку це 'band'.
// Третій аргумент - це об'єкт, який описує властивість. У цьому випадку ми хочемо додати сетер,
// тому ми вказуємо функцію, яка буде викликатися при спробі встановити властивість 'band'.  this.band = newBand

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  // Об'являємо приватні поля #name; #members;
  #name; 
  #members;
  /*
   * Створюємо конструктор з двома вхідними параметрами: #name і #members
   * #members - це масив об'єктів, що є екземплярами класу Musician або його нащадків
   */
  constructor(name, members) {
    this.#name = name
    this.#members = members
  }
  // Створюємо getter для #name, що повертає приватну властивість #name
  get name() {
    return this.#name
  }
  // Створюємо getter для #members, що повертає приватну властивість #members
  get members() {
    return this.#members
  }
  // Створюємо сетер для #name
  set name(name) {
    this.#name = name
  }
  // Створюємо метод addMember(), що додає нового учасника до гурту
  addMember(newMember) {
    if (newMember instanceof Musician) {
    // Перевіряємо чи Musician є прототипом newMember
      this.#members.push(newMember)
      // Ось тут ми використовуємо сетер band класу Musician
      // До приватного поля #members яке є масивом додаємо мового музиканта
    } else {
      console.log("Новий учасник повинен бути екземпляром класу Musician")
      // Якщо ні виводимо в консоль повідомлення Новий учасник повинен бути екземпляром класу Musician
    }
  }
  // Створюємо метод playMusic(), за допомогою forEach перебираємо масив і викликаємо метод play() для кожного учасника гурту
  playMusic() {
    this.#members.forEach(member => {
      if (member instanceof Musician) {
        member.play()
      }
    });
  }
}

/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  // Об'являємо приватні поля #band; #location; #date;
  #band; 
  #location; 
  #date;
  // Створюємо конструктор з трьома вхідними параметрами: #band, #location та #date
  constructor (band, location, date) {
    this.#band = band
    this.#location = location
    this.#date = date
  }
  // Створюємо getter для #band, що повертає приватну властивість #band
  get band() {
    return this.#band
  }
  // Створюємо getter для #location, що повертає приватну властивість #location
  get location() {
    return this.#location
  }
  // Створюємо getter для #date, що повертає приватну властивість #date
  get date() {
    return this.#date
  }
  // Визначаємо метод info(), що виводить рядок в консоль `Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`
  info() {
    console.log(`Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`)
  }
}

/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  // Об'являємо приватні поля #ticketPrice;
  #ticketPrice;
  // Створюємо конструктор з чотирма вхідними параметрами: #band, #location, #date та #ticketPrice
  constructor(band, location, date, ticketPrice) {
  // використання super для виклику конструктора базового класу
    super(band, location, date);
    this.#ticketPrice = ticketPrice
  }
  // Створюємо getter для #ticketPrice, що повертає приватну властивість #ticketPrice
  get ticketPrice () {
    return this.#ticketPrice
  }
  // Створюємо setter для #ticketPrice, що дозволяє змінити приватну властивість #ticketPrice
  set ticketPrice(value) {
    this.#ticketPrice = value
  }
  // Визначаємо метод info(), що виводить рядок в консоль `Гурт ${super.band.name} виступить в ${super.location} ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`
  info() {
    console.log(`Гурт ${super.band.name} виступить в ${super.location} ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`)
  }
}

/*
 * Клас: Vocalist
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
  // Об'являємо приватні поля #name; #band;
  #name; 
  #band;
  // Створюємо конструктор з двома вхідними параметрами: #name та #band
  constructor(name, band) {
    this.#name = name
    this.#band = band
  }
  // Створюємо getter для #name, що повертає приватну властивість #name
  get name() {
    return this.#name
  }
  // Створюємо getter для #band, що повертає приватну властивість #band
  get band() {
    return this.#band
  }
  // Створюємо setter для #name, що дозволяє змінити приватну властивість #name
  set name(newName) {
    this.#name = newName
  }
  // Створюємо setter для #band, що дозволяє змінити приватну властивість #band
  set band(newInstrument) {
    this.#band = newInstrument
  }
  // Визначаємо метод info(), який виводить інформацію про вокаліста
  info () {
    console.log(`Вокаліст ${this.name} є членом гурту ${this.band}`)
    // Виводимо інформацію у форматі: "Вокаліст ${this.name} є членом гурту ${this.band}"
  }
}

/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  // Об'являємо приватні поля #songs;
  #songs;
  // Створюємо конструктор з одним вхідним параметром: #songs
  constructor(songs) {
    this.#songs = songs
  }
  // Створюємо getter для #songs, що повертає приватну властивість #songs
  get songs() {
    return this.#songs
  }
  // Створюємо метод addSong для додавання нової пісні до масиву #songs
  addSong(newSongs) {
    this.#songs.push(newSongs)
  }
  // Визначаємо метод info(), який виводить інформацію про автора пісень
  info() {
    console.log(`Написав ${this.songs.length} пісень`)
    // Виводимо інформацію у форматі: "Написав ${this.songs.length} пісень"
  }
}

/*
 * Клас: LeadSinger
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */

class LeadSinger extends Vocalist {
  // Створюємо конструктор з двома вхідними параметрами: name, band
  constructor(name, band) {
    super(name, band);
  }
}
const musician = new Musician("John", "Guitarist")
/*
 * Створення musician екземпляра класу Musician
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "John"           |
 * | instrument  | "Guitarist"      |
 */
const guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin")
/*
 * Створення guitarist екземпляра класу Guitarist
 * ---------------------------------------------------
 * | Властивість |  Значення         |
 * |-------------|-------------------|
 * | name        | "Jimmy Page"      |
 * | instrument  | "гітара"          |
 * | band        | "Led Zeppelin"    |
 */
const bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles")
/*
 * Створення bassist екземпляра класу Bassist
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "бас-гітара"     |
 * | band        | "The Beatles"    |
 */
const band = new Band("The Beatles", [bassist])
/*
 * Створення band екземпляра класу Band
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]       |
 */
band.addMember(guitarist)
// Додаємо guitarist до band за допомогою addMember
const vocalist = new Vocalist("Freddie Mercury", "Queen")
/*
 * Створення vocalist екземпляра класу Vocalist
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | name        | "Freddie Mercury" |
 * | band        | "Queen"           |
 */
const songwriter = new SongWriter(["Yesterday","Hey Jude","Let It Be",])
/*
 * Створення songwriter екземпляра класу SongWriter
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */
const performance = new Performance(band, "Liverpool", new Date('2023-08-01'))
// Створення performance екземпляра класу Performance
/*
 * ------------------------------------------------------
 * | Властивість |       Значення                       |
 * |-------------|--------------------------------------|
 * | band        | band                                 |
 * | location    | "Liverpool"                          |
 * | date        | new Date('2023-08-01')               |
 */
Object.assign(LeadSinger.prototype, songwriter)
// використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype
const concert = new Concert(band, "BBC studios", new Date('1994-07-06'), 100)
/*
 * Створення concert екземпляра класу Concert
 * ---------------------------------------------------
 * | Властивість |  Значення              |
 * |-------------|------------------------|
 * | band        | band                   |
 * | location    | "BBC studios"          |
 * | date        | new Date("1994-07-06") |
 * | ticketPrice | 100                    |
 */
const leadsinger = new LeadSinger("Mick Jagger", "The Rolling Stones", ["Yesterday","Hey Jude","Let It Be",])
/*
 * Створення leadsinger екземпляра класу LeadSinger
 * ------------------------------------------------------
 * | Властивість |  Значення                            |
 * |-------------|--------------------------------------|
 * | name        | "Mick Jagger"                        |
 * | band        | "The Rolling Stones"                 |
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

// Методи для тестування розкоментувати після виконня всіх завдань
musician.play();
guitarist.play();
bassist.play();
band.playMusic();
performance.info();
concert.info();
vocalist.info();
songwriter.info();
leadsinger.info();
