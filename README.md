# Learning Identity (Express JS)

Server provide three services

* Registration

  ```
  POST /identity/register

  {
    "name": "",
    "email": "",
    "password": ""
  }
  ```
* Login

  ```
  POST /identity/login

  {
    "username": "",
    "password": ""
  }
  ```

* Forgot Username

  ```
  POST /identity/forgot-username

  {
    "email": ""
  }
  ```

* Forgot Password

  ```
  POST /identity/forgot-password

  {
    "username": ""
  }
  ```
