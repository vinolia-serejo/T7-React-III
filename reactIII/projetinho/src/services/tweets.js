import protocolo from './api'

// http://localhost:3001/tweets?X-AUTH-TOKEN=
export function postTweets(tweet, token){
    console.log('conteudo', tweet)
    const url = `/tweets?X-AUTH-TOKEN=${token}`
    return protocolo.post(url, tweet)
}
// export function getTweets(){
//     const url ='/tweets'
//     return protocolo.get(url)
// }