import { doc, setDoc } from 'firebase/firestore'
import { database } from '../firebase-config'

function syncSurvey(docId) {
    const docRef = doc(database, `users/${docId}`)
}