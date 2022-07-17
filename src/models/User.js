let user = {
    "tokenId": "",
    "name": "",
    "email": "",
    "photoUrl": "",
    "coin": "",
    "energy": ""
}

export function updateUser(id, name, email, photoUrl, coin, energy) {
    user['tokenId'] = id
    user['name'] = name
    user['email'] = email
    user['photoUrl'] = photoUrl
    user['coin'] = coin
    user['energy'] = energy
}

export function getUser() {
    return user
}