
# Express REST API

> REST API that have CRUD functionality for heroes data.

## Tools

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- MySQL

## Usage

```sh
1. npm install
2. npm run start
```

## API Reference

### Get all heroes

```http
GET /hero/getallheroes
```

#### Example

Response
```json
{
    "message": "Heroes data found!",
    "data": [
        {
            "id": 1,
            "name": "Izuku Midoriya",
            "alias": "Deku",
            "quirk": "One For All",
            "affiliation": "Hero",
            "age": 16,
            "createdAt": "2023-02-03T08:36:49.000Z",
            "updatedAt": "2023-02-03T08:36:49.000Z"
        },
        {
            "id": 2,
            "name": "Katsuki Bakugo",
            "alias": "Dynamight",
            "quirk": "Explosion",
            "affiliation": "Hero",
            "age": 17,
            "createdAt": "2023-02-04T04:24:27.000Z",
            "updatedAt": "2023-02-04T04:24:27.000Z"
        }
    ]
}
```


### Get all heroes based on name

```http
GET /hero/getallheroes?name=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | Heroes name |

#### Example

Request Query Params

```sh
name=Midoriya
```

Response
```json
{
    "message": "Heroes data found!",
    "data": [
        {
            "id": 1,
            "name": "Izuku Midoriya",
            "alias": "Deku",
            "quirk": "One For All",
            "affiliation": "Hero",
            "age": 16,
            "createdAt": "2023-02-03T08:36:49.000Z",
            "updatedAt": "2023-02-03T08:36:49.000Z"
        }
    ]
}
```

### Get hero by id

```http
GET /hero/gethero/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id of hero (**Required**)|

#### Example

Request Params

```sh
id=2
```

Response
```json
{
    "message": "Hero data found!",
    "data": {
        "id": 2,
        "name": "Katsuki Bakugo",
        "alias": "Dynamight",
        "quirk": "Explosion",
        "affiliation": "Hero",
        "age": 17,
        "createdAt": "2023-02-04T04:24:27.000Z",
        "updatedAt": "2023-02-04T04:24:27.000Z"
    }
}
```

### Create hero

```http
POST /hero/addhero/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | Hero name (**Required**)|
| `alias`      | `string` | Hero alias|
| `quirk`      | `string` | Hero quirk|
| `affiliation`      | `string` | Hero affiliation|
| `age`      | `integer` | Hero age|

Request Body

```json
{
    "name": "Shoto Todoroki",
    "alias": "Shoto",
    "quirk": "Half-Cold Half-Hot",
    "affiliation": "Hero",
    "age": 16
}
```

Response
```json
{
    "message": "Hero data successfully inserted!",
    "data": {
        "id": 3,
        "name": "Shoto Todoroki",
        "alias": "Shoto",
        "quirk": "Half-Cold Half-Hot",
        "affiliation": "Hero",
        "age": 16,
        "updatedAt": "2023-02-04T04:32:07.011Z",
        "createdAt": "2023-02-04T04:32:07.011Z"
    }
}
```

### Update hero

```http
PUT /hero/updatehero/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id of hero to be updated (**Required**)|
| `name`      | `string` | Hero name (**Required**)|
| `alias`      | `string` | Hero alias|
| `quirk`      | `string` | Hero quirk|
| `affiliation`      | `string` | Hero affiliation|
| `age`      | `integer` | Hero age|

Request Params

```sh
id=3
```

Request Body

```json
{
    "name": "Enji Todoroki",
    "alias": "Endeavor",
    "quirk": "Hellflame",
    "affiliation": "Hero",
    "age": 46
}
```

Response
```json
{
    "message": "Hero data successfully updated!"
}
```

### Delete hero

```http
DELETE /hero/updatehero/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id of hero to be deleted (**Required**)|

Request Params

```sh
id=3
```

Response
```json
{
    "message": "Hero data successfully deleted!"
}
```