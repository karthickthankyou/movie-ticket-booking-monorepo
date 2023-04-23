import { Role } from '@showtime-org/types'
import { FirebaseService } from 'src/common/firebase/firebase.service'

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
