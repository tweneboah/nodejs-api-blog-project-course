
# __Blog API Application Project__
## Tech Stack

**Server:** Node, Express, MongoDB, Mongoose, JWT


# [__ENROL IN THE COURSE__](https://www.udemy.com/course/nodejs-api-complete-guide-by-building-blog-application-api/?couponCode=BLACK-FRIDAY-LUNCH)
# API FEATURES
- Authentication & Authorization
- Post CRUD operations
- Comment functionality
- System blocking user if inactive for 30 days
- Admin can block a user
- A user can block different users
- A user who block another user cannot see his/her posts
- Last date a post was created
- Check if a user is active or not
- Check last date a user was active
- Changing user award base on number of posts created by the user
- A user can follow and unfollow another user
- Get following and followers count
- Get total profile viewers count
- Get posts created count
- Get blocked counts
- Get all users who views someone's profile
- Admin can unblock a blocked user
- Update password
- Profile photo uploaded
- A user can close his/her account

# ENDPOINTS
 - [API Authentication](#API-Authentication)
    - [ Register a new API client](#Register-a-new-API-client)
    - [ login](#User-Login)

 - [Users](#api)
    - [Get my profile](#get-my-profile)
    - [Get all users](#Get-all-users)
    - [View a user profile Count](#view-a-user-profile) 
    - [Following a user](#Following-a-user)
    - [#UnFollowing-a-user](#UnFollowing-a-user)
    - [Update user password](#Update-user-password)
    - [Update your profile](#Update-your-profile)
    - [Block another user](#Block-user)
    - [Unblock another user](#Unblock-user)
    - [Admin blocking a   user](#Admin-blocking-a-user)
    - [Admin Unblocking a   user](#Admin-unblocking-a-user)
    - [Delete your account](#Delete-your-account) 
    - [Upload Profile Photo](#Upload-Profile-Photo) 

- [Posts](#Posts-API-Refeference)
    - [Create Post](#Create-Post)
    - [Get All Posts](#Get-All-Posts)
    - [Get Single Post](#Get-Single-Post)
    - [Toggle Post like](#Toggle-Post-like)
    - [Toggle Post dislike](#Toggle-Post-dislike)
    - [Update Post](#Update-Post)
    - [Delete Post](#Delete-Post)

- [Comments](#Comment-API-Reference)
    - [Create comment](#Create-Comment)
    - [Update post](#Update-Comment)
    - [Delete post](#Delete-Comment)


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`


# API Authentication
 Some endpoints may require authentication for example. To create a create/delete/update post, you need to register your API client and obtain an access token.

The endpoints that require authentication expect a bearer token sent in the `Authorization header`.

__Example__:

`Authorization: Bearer YOUR TOKEN`

## Register a new API client
```http
POST /api/v1/users/register
```
The request body needs to be in JSON format.


# __API Reference__


## __User Login__

```http
POST /api/v1/users/login
```

| Parameter | Type     | Description                |Required|
| :-------- | :------- | :------------------------- |:-------|
| `authentication` | `string`   | Your token        | no     |
| `email` | `string`   | Your email                 | yes    |
| `password` | `string`| Your password              | yes    |

Example request body:
```javascript
{
  "email":"your email"
  "password":"your password"
}
```

## __get my profile__

```http
GET /api/v1/users/profile
```

| Parameter | Type     | Description                |Required|
| :-------- | :------- | :------------------------- |:-------|
| `authentication` | `string`   | Your token        | yes   |

## __Get all users__

```http
GET /api/v1/users/users
```

| Parameter | Type     | Description                |Required|
| :-------- | :------- | :------------------------- |:-------|
| `authentication` | `string`   | Your token        | no     |

## __view a user profile__

```http
GET /api/v1/users/profile-viewers/:id
```

| Parameter           | Type        | Description                                         |Required |
| :-------------------| :-----------| :-------------------------------------------------- |:--------|
| `authentication`    | `string`    | Your token                                          | yes     |
| `id`                | `string`    | ID of the user you want to view his profile         | yes     |


#### __Following a user__


```http
GET /api/v1/users/following/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the user you want to  follow                   | yes    |


## __UnFollowing a user__


```http
GET /api/v1/users/unfollowing/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the user you want to  follow                   | yes    |




## __Update user password__


```http
PUT /api/v1/users/update-password
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `password`            | `string`     | Enter your password                                  | yes    |


Example request body:
```javascript
{
  "password":"value"
}
```

## __Update your profile__


```http
PUT /api/v1/users
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `email`               | `string`     | Enter your email                                     | no     |
| `firstname`           | `string`     | Enter your firstname                                 | no     |
| `lastname`            | `string`     | Enter your lastname                                  | no     |


Example request body:
```javascript
{
  "email":"value",
  "firstname":"value",
  "lastname":"value",
}
```

## __Block another user__


```http
PUT /api/v1/users/block/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | Id of the user you want to block                     | yes    |

## __Unblock  user__


```http
PUT /api/v1/users/unblock/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | Id of the user you want to unblock                   | yes    |


## __Admin blocking a   user__

```http
PUT /api/v1/users/admin-block/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | Id of the user you want to  block                    | yes    |

## __Admin unblocking a   user__


```http
PUT /api/v1/users/admin-unblock/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | Id of the user you want to unblock                   | yes    |



## __Delete your account__

```http
  DELETE /api/v1/users/delete-account
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |


## __Upload Profile Photo__

```http
  DELETE /api/v1/users/profile-photo-upload
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `profilePhoto`        | `string`     | Image to upload                                      | yes    |


# __Posts API Refeference__


## __Create Post__

```http
  POST /api/v1/posts
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `title`               | `string`     | Post title                                           | yes    |
| `description`         | `string`     | Post description                                     | yes    |
| `category`            | `string`     | ID of the category                                   | yes    |
| `photo`               | `string`     | Image of the post                                    | yes    |

Example request body:
```javascript
{
  "title":"value",
  "description":"value",
  "category":"value",
  "photo":"photo",
}
```

## __Get All Posts__

```http
  GET /api/v1/posts
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | no     |



## __Get Single Post__

```http
  GET /api/v1/posts/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the post                                       | yes    |


## __Toggle Post like__

```http
  GET /api/v1/postslikes/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the post                                       | yes    |

## __Toggle Post dislike__

```http
  GET /api/v1/posts/dislikes/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the post                                       | yes    |

## __Update Post__

```http
  PUT /api/v1/posts/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the post                                       | yes    |
| `title`               | `string`     | title of the post                                    | yes    |
| `description`         | `string`     | description of the post                              | yes    |
| `category`            | `string`     | category of the post                                 | yes    |
| `photo`               | `string`     | photo of the post                                    | yes    |

Example request body:
```javascript
{
  "title":"value",
  "description":"value",
  "category":"value",
  "photo":"photo",
}
```

## __Delete Post__

```http
  GET /api/v1/posts/dislikes/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the post                                       | yes    |


# __Comment API Reference__

## __Create Comment__
```http
  POST /api/v1/comments/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the post                                       | yes    |

## __Delete Comment__
```http
  DELETE /api/v1/comments/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the comment                                    | yes    |


## __Update Comment__
```http
  PUT /api/v1/comments/:id
```

| Parameter             | Type         | Description                                          |Required|
| :-------------------- | :------------|:---------------------------------------------------- |:-------|
| `authentication`      | `string`     | Your token                                           | yes    |
| `id`                  | `string`     | ID of the post                                       | yes    |


## Feedback

If you have any feedback, please reach out to us at support@inovoteksupport.com

![Logo](https://yt3.ggpht.com/kuG0t4b_bTsNnGHw-FQva380BdNJJylaMeMuXklJggO45T-mKajSCjNv3t2W0CYL-7xEz5N1AJA=s176-c-k-c0x00ffffff-no-rj)

## 🔗 Social Links
[![facebook](https://img.shields.io/badge/facebook-Code?style=for-the-badge&logo=facebook&logoColor=white&color=blue)](https://www.facebook.com/)

[![youtube](https://img.shields.io/badge/youtube-Code?style=for-the-badge&logo=youtube&logoColor=redk&color=red)](https://www.facebook.com/)

[![youtube](https://img.shields.io/badge/udemy-Code?style=for-the-badge&logo=udemy)](https://www.facebook.com/)


## Author

- [@I-Novotek Academy](https://www.youtube.com/@inovotek-academy)


