import axios from 'axios';
// const baseUrl = "https://joke-backend-kel.herokuapp.com"
const localUrl = "http://localhost:8081"
const JOKE_API_BASE_URL =localUrl +"/api/v1/jokes";
const MOST_JOKE_API_BASE_URL = localUrl+"/api/v1/jokes/most"
const LEAST_JOKE_API_BASE_URL = localUrl+"/api/v1/jokes/least"
const COMMENT_JOKE_API_BASE_URL = localUrl+"/api/v1/jokes/comment"
const SEND_JOKE_TO_EMAIL_URL = localUrl+"/api/v1/jokes/send-jokes"
const CREATE_USER_JOKE_URL = localUrl+"/api/v1/jokes/register-user"

class JokeService{

    getJokes(){
        return axios.get(JOKE_API_BASE_URL);
    }

    createJokes(joke){
        return axios.post(JOKE_API_BASE_URL,joke);
    }

    creatUser(user){
        return axios.post(CREATE_USER_JOKE_URL,user)
    }

    createComment(jokeId,comment){
        return axios.post(JOKE_API_BASE_URL +'/'+jokeId,comment)
    }

    getJokeById(jokeId){
        return axios.get(JOKE_API_BASE_URL + '/' + jokeId)
    }

    deleteJoke(jokeId){
        return axios.delete(JOKE_API_BASE_URL+'/'+jokeId)
    }

    deleteComment(commentId){
        return axios.delete(COMMENT_JOKE_API_BASE_URL+'/'+commentId)
    }

    getMostLikeJokes(){
        return axios.get(MOST_JOKE_API_BASE_URL)
    }

    getLeastLikeJokes(){
        return axios.get(LEAST_JOKE_API_BASE_URL)
    }

    likeJokes(jokeId){
        return axios.patch(JOKE_API_BASE_URL+'/'+jokeId)
    }

    getCommentsOfJoke(jokeId){
        return axios.get(COMMENT_JOKE_API_BASE_URL+'/'+jokeId)
    }

    sendJokesToEmail(jokeId,userEmail){
        return axios.post(SEND_JOKE_TO_EMAIL_URL+'/'+jokeId,userEmail)
    }

   
}

export default new JokeService()