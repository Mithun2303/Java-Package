const { default: axios } = require("axios");
const cheerio = require("cheerio");

const scrapy = async (movie_name) => {

    const url = `https://www.rottentomatoes.com/m/${movie_name}`;
    let obj = {};
    obj["name"] = movie_name;
    try {
        const res = await axios.get(url);
        const respons = await cheerio.load(res.data);
        obj["title"] = respons('h1.title').html();
        console.log(obj["title"]);
        obj["synopsis"] = respons('p[data-qa="movie-info-synopsis"]').text().trim();
        const topics = respons('b.info-item-label');
        const values = respons('span[data-qa="movie-info-item-value"]');
        topics.each((index, element) => {
            // Get the text content of each info item
            const info = respons(element).text().trim().replace(":","");
            obj[info] = respons(values[index]).text().trim().replace(/\s+/g, ' ');
            // console.log(info, value);
        });
        let ls = []
        const cast = respons('div.cast-and-crew-item');
        cast.each((index, el) => {
            let s = {};
            const img = respons(el).children("a").children("img").prop("src");
            s["img"] = img;
            const name = respons(el).children("div").children("a").children("p").text();
            s["name"] = name;
            const as = respons(el).children("div").children("p").text().trim().replace(/\s+/g, ' ');
            s["as"] = as;
            ls.push(s);
        });
        obj["cast-crew"] = ls;
        let ls1 = [];
        const where_to_watch = respons('where-to-watch-meta');
        where_to_watch.each((index, el) => {
            let s = {};
            s["media"] = respons(el).prop("affiliate");
            s["link"] = respons(el).prop("href");
            ls1.push(s);
            console.log(s);
        })
        obj["where-to-watch"] = ls1;
        const thumbnail = respons('div.thumbnail-scoreboard-wrap').children("div").children("tile-dynamic").children("rt-img").prop("src");
        // console.log(thumbnail);
        obj["thumbnail"] = thumbnail;
        const images = respons('tiles-carousel-responsive-item-deprecated');
        // console.log(images);
        let s = [];
        images.each((index, el) => {
            const media = respons(el).children("rt-button").children("tile-dynamic").children("rt-img").prop("src");
            // const link = respons(el).prop("href");
            // URL string
            // Regex pattern to match the second URL
            if (media != undefined) {
                s.push(media.replace("300x300", ""));
            }
        })
        obj["other-images"] = s;

        // console.log(obj);

        return obj;
    } catch (error) {

            return { "message": "errror" }
    }
}


module.exports = scrapy