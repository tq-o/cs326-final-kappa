# Title:

kappa

# Subtitle:

kappa-relaxing app

# Semester:

Fall 2020

# Overview:
Project link: https://cs326-final-project.herokuapp.com/

Our application is aiming at stressed people in everyday life no matter from all walks of life. This life is just too harsh and fast-paced for people to have a moment to sit down and have their own time. This app takes such inspiration and hopes to bring about some or even small happiness to lighten up their days. This application also practice simplistic design patterns with a hope that users will find no difficulty using the website. Our application include easy sign-up and log-in allowing different profiles for users. We have a wide range of activities for users to choose from: Breathing in and out, Random meme generator, Mood chart, Listening to music, and Watching videos. We allow a lot of options for users to have a diverse experience using this app, also it is simple enough not to overwhelm them as many official apps out in the market.

# Team Members:

Duy Pham: <br>
Thai On: tq-o <br>
Thanh Phan: <br>
Even though we are not in the same time zone, this whole experience of team work was challenging and fun.

# User Interface:

### Log-in page:

This is the log-in page for user to log in allowing different personal usage.
![Image of Log-in](https://github.com/tq-o/cs326-final-kappa/blob/main/docs/final/log-in.JPG)

### Welcoming page:

This is the welcoming page for users to signify that they successfully log in and are ready to use.
![Image of welcome](https://github.com/tq-o/cs326-final-kappa/blob/main/docs/final/welcome.JPG)

### Menu bar:

This is the menu bar for users to navigate between pages/activities
![Image of menu](https://github.com/tq-o/cs326-final-kappa/blob/main/docs/final/menu-bar.JPG)

### Breathing in-and-out activity:

This is the page stimulating the breath-in-and-out action so that the user can follow the simple instruction with a cool and realistic illustration.
![Image of breathe](https://github.com/tq-o/cs326-final-kappa/blob/main/docs/final/Capture.JPG)

### Meme watching activity:

This is the page for memes that never fails to make users have a good laugh for themselves. Everytime they refresh the page, a new meme will pop up. We use an online API for this meme property.
![Image of meme](https://github.com/tq-o/cs326-final-kappa/blob/main/docs/final/meme.JPG)

### Mood chart calculation:

This mood chart will store the frequency of user's mood so that they can see their overall life satisfaction level, and we hope when using the app, they will always feel happy.
![Image of mood](https://github.com/tq-o/cs326-final-kappa/blob/main/docs/final/mood.JPG)

### Listening to music activity:

This music page will allow people to listen to random songs based on their moods. Each mood the user chooses, one random song for that mood will be showned. This feature is incoporated with Soundcloud webisite.
![Image of music](https://github.com/tq-o/cs326-final-kappa/blob/main/docs/final/music.JPG)

### Watching videos activity:

This page gives users random relaxing video to watch to, using YouTube API. Every time the user eneter or refresh the page, a random video will appear allowing them to play.
![Image of video](https://github.com/tq-o/cs326-final-kappa/blob/main/docs/final/video.JPG)

# APIs:

## There is 4 endpoints in total:

### POST `/signup`: For create new users

Example: `http://localhost:8000/signup?username=cunbidun1234&password=cunbidun1234`

Expected response:

1. 200: User created

2. 403: User exists

### POST `/login`: For log old users in

Example: `http://localhost:8000/login?username=cunbidun1&password=1`

Expected response:

1. 200: correct `username` and `password`

2. 401: incorrect `username` or `password`

### GET `/mood`: for getting user's moods

Example: `http://localhost:8000/mood?username=cunbidun1234`

Expected response:

1. 200:

```
  {
    "happy": 1,
    "sad": 15,
    "angry": 1,
    "disgust": 2,
    "fear": 3,
    "surprise": 6
  }
```

2. 404:

```
{
  "error": "there is no username"
}
```

### POST `/mood`: for updating user's moods

Example: `http://localhost:8000/mood?username=cunbidun1234&happy=1&sad=15&angry=1&disgust=2&fear=3&surprise=5`

Expected response

1. 200:

```
{
  "message": "update completed",
  "id": "5fca6781613bc16da9e5b9ef"
}
```

2. 404:

```
{
  "error": "there is no username"
}
```

# Database:

We use MongoDB with mongoose driver

# URL Routes/Mappings:

URL mappings:

1. `/activities` -> `/client/html/activities-listing.html`
2. `/musics` -> `/client/html/music-listing.html`
3. `/videos` -> `/client/html/video-tab.html`
4. `/meme` -> `/client/html/meme.html`
5. `/moodchart` -> `/client/html/moodchart.html`
6. `/breathe` -> `/client/html/breathe.html`
7. `/welcome` -> `/client/html/welcome.html`
8. `/login` -> `/client/html/login.html`
9. `/signup` -> `/client/html/signup.html` 10.`\` -> `\login`

Note:

1. Logged in user will be redirect to `welcome` page if they try to access `login` and `signup`
2. Anonymous user will be redirect to `login` page

# Authentication/Authorization:

For now the authentication is quite basic, we just check if `username` and `password` match or not

# Division of Labor:

The idea of each feature is from everyone, Thai is mainly front-end, Duy and Thanh are mainly back-end. That being said, everyone contributes roughly the same in every stage.

# Conclusion:

Conclusion: A conclusion describing your team’s experience in working on this project. This should include what you learned through the design and implementation process, the difficulties you encountered, what your team would have liked to know before starting the project that would have helped you later, and any other technical hurdles that your team encountered.

Our team works very well as each person has their own strength. The biggest problem we faced was the time zone issue. It was kind of hard for us to communicate the most effectively when there are a big different between time zones (12 hours difference) for members though we still got through such problems with adequate communication. the project is sure to be one of the biggest valuable lesson we have in college as a Computer Science major. The design part took an enormous amount, including getting ideas rejected, modying ideas several times, deciding on features for our application. Design is needed the ability of telling a story and emphathize the difference in users which we try to show that in our product. There are a lot of small details of components that we did not really know about, especially using apis and incorporate it onto our design though we did learn about apis, but we never really care about the user interface aspect of it and now we have to do it. There are some fun timing feature in css and js that we also discover that is very advanced.
