import { FirebaseService } from 'src/common/firebase/firebase.service'
import { Role } from 'src/common/types'

export const setFirebaseRole = async ({
  firebaseService,
  uid,
  roles,
}: {
  firebaseService: FirebaseService
  uid: string
  roles: Role[]
}) => {
  await firebaseService.getAuth().setCustomUserClaims(uid, {
    roles,
  })

  console.log(`Successfully set ${roles}`)
}

export const random = <T>(arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const randomN = <T>(arr: T[], n: number) => {
  const shuffledArr = [...arr].sort(() => Math.random() - 0.5)
  return shuffledArr.slice(0, n)
}
