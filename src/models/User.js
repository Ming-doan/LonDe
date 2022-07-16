let user = {
    "tokenId": "",
    "name": "",
    "email": "",
    "photoUrl": ""
}

export function updateUser(id, name, email, photoUrl) {
    user['tokenId'] = id
    user['name'] = name
    user['email'] = email
    user['photoUrl'] = photoUrl
}

export function getUser() {
    return user
}