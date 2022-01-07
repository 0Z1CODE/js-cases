//Single Responsibility Principle

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modifyd = false;
  }

  uodateNews() {
    this.text = text;
    this.modifyd = true;
  }

  // toHTML() {
  //   return `<div class=""news>
  //   <h1>${this.title}</h1>
  //   <p>${this.text}</p>
  //   </div>`
  // }
  // toJSON() {
  //   return JSON.stringify(
  //     {
  //       title: this.title,
  //       text: this.text,
  //       modifyd: this.modifyd
  //     }, null, 2
  //   )
  // }
}

class NewsShown {
  constructor(news) {
    this.news = news;
  }
  toHTML() {
    return `<div class=""news>
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
        </div>`;
  }
  toJSON() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modifyd: this.news.modifyd,
      },
      null,
      2
    );
  }
}

// const news = new News("Dick", "a big Chainy book")

// console.log(news.toJSON());

const printType = new NewsShown(new News("Dick", "a big Chainy book"));

console.log(printType.toJSON());
