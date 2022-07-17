import { doc, setDoc, getDoc } from 'firebase/firestore'
import { database } from '../firebase-config'
import { getUserInfo } from './Authenticate'
import { getUser } from '../models/User'

async function syncSurvey(survey) {
    const docRef = doc(database, `users/${getUserInfo()}`)
    const snapshot = await getDoc(`users/${getUserInfo()}`)

    console.log(getUserInfo(), snapshot.data(), survey)

    setDoc(docRef, { ...getUser(), survey }, { merge: true })
}

export default syncSurvey