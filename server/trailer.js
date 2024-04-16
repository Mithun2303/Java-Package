const { default: axios } = require("axios");
const cheerio = require("cheerio");

const search = async (movie_name) => {
    let name = movie_name;
    name+=" trailer";
    name=name.replace(" ","+");
    console.log(name)
    const url =  `https://www.youtube.com/results?search_query=${name}`;
    try {
        const res = await axios.get(url);
        const respons = cheerio.load(res.data);
        const s = respons('a');
        console.log(s.length)
        s.each((ind,el)=>{
            // console.log(respons(el).html())
        })
        // // const firstLink = respons('a#video-title').first().attr('href');
        // console.log(s);
        // return resp;
    } catch (error) {

            return { "message": "errror" }
    }
}

search("leo");
// module.exports = search;