const { default: axios } = require("axios");
const cheerio = require("cheerio");

const search = async (search_key) => {

    const url = `https://www.rottentomatoes.com/search?search=${search_key}`;
    let obj = {};
    try {
        const res = await axios.get(url);
        const respons = await cheerio.load(res.data);
        const search = respons('search-page-media-row');
        let resp = []
        search.each((index,value)=>{
            let obj = {}
            let key = respons(value).children("a").prop("href");
            let thumbnail = respons(value).children("a").children("img").prop("src");
            let title = respons(value).children('a[slot="title"]').html().trim();
            if(key.match('https:\/\/www\.rottentomatoes\.com\/m\/.*')){
                key = key.substring(33)
                obj["title"] = title;
                obj["key"] = key;
                obj["thumbnail"] = thumbnail;
                resp.push(obj);
            }
        })
        console.log(resp);
        return resp;
    } catch (error) {

            return { "message": "errror" }
    }
}

// search("leo");
module.exports = search;