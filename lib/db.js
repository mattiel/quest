import quests from 'pages/api/auth/quests'
import firebase from './firebase'

const firestore = firebase.firestore()

export async function createUser(uid, data) {
  return await firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
}

export async function fetchUserSpaces(uid) {
  const spaces = []
  try {
    if(!firebase) return
    const db = firebase.firestore()
    const ref = db.collection('quests')

    const docs = await ref.where('uid', '==', uid).get()
    docs.forEach((doc) => {
      const data = doc.data()
      spaces.push(data.data)
    })
  } catch (e) {
    console.error('FIRESTORE ERROR', e)
  }
  return spaces
}

export async function fetchUserQuests(uid) {
  const quests = []
  try {
    if(!firebase) return
    const ref = firestore
      .collection('quests')
      .doc(uid)
      .collection('quest')

    const docs = await ref.get()
    docs.forEach((doc => {
      quests.push(doc.data())
      console.log(doc.id, " => ", doc.data())
    }))
  } catch(e) {
    console.error('FIRESTORE ERROR', e)
  }

  return await quests
}


export async function createSpace(uid, data) {
  const quest = firestore
    .collection('quests').doc(uid)
  await quest.set({data, uid})
  return quest
}

export async function createQuest(uid, data) {
  const questRef = firestore
    .collection('quests')
    .doc(uid)
    .collection('quest')
    .doc()
  await questRef.set({
    name: data.questName,
    description: data.description
  })
  const taskRef = questRef
    .collection('tasks')
    .doc()
  return await taskRef.set({
    taskName: data.taskName,
    taskEndDate: data.taskEndDate
  })
}

export async function deleteQuest(uid, name) {
  const questRef = firestore
    .collection('quests')
    .doc(uid)
    .collecti
}