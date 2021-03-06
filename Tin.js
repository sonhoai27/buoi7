class Tin {
  constructor(title, date, desc, image) {
    this.title = title;
    this.date = date;
    this.desc = desc;
    this.image = image;
  }
}

let mangTin = [
  new Tin(
    'Khoa Pham mo lop ReactNative',
    '13/3/2017',
    'ReactNative la mot thu vien cua Facebook, chay da nen tang',
    'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  ),
  new Tin(
    'Khoa Pham mo lop ReactJS',
    '16/3/2017',
    'ReactJS la mot thu vien cua Facebook, chay da nen tang Web',
    'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  ),
  new Tin(
    'PHP Khoa Pham tuyen sinh khoa moi',
    '13/3/2017',
    'Chao cac ban hoc vien',
    'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  ),
  new Tin(
    'KhoaPham to chuc hoi thao Redux',
    '13/3/2017',
    'Chu nhat 18/2/2017, hoi thao duoc to chuc tai 92 Le Thi Rieng',
    'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  ),
  new Tin(
    'KhoaPham to chuc hoi thao Redux',
    '13/3/2017',
    'Chu nhat 18/2/2017, hoi thao duoc to chuc tai 92 Le Thi Rieng',
    'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  ),
  new Tin(
    'KhoaPham to chuc hoi thao Redux',
    '13/3/2017',
    'Chu nhat 18/2/2017, hoi thao duoc to chuc tai 92 Le Thi Rieng',
    'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  ),
]

module.exports = {mangTin, Tin};
