import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { database } from '../firebase-config'
import { auth } from '../firebase-config'
import { updateUser, getUser } from '../models/User'


function getUserInfo(userId, updateData) {
    const collectionRef = collection(database, 'users')
    const querySnapshot = query(collectionRef, where("userid", "==", userId))
    onSnapshot(querySnapshot, (snapshot) => {
        updateData(snapshot.docs[0].data())
    })
}

export async function signIn(email, password) {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        getUserInfo(user.user.uid, (userInfo) => {
            updateUser(user.user.uid, userInfo.name, user.user.email, userInfo.photoUrl)
        })
        console.log(user, getUser())
    } catch (e) {
        console.log(e)
    }
}

export function authChecker() {
    return auth.currentUser.uid
}

export async function logOut() {
    await signOut(auth)
}