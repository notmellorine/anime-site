import { UserCircleIcon } from '@heroicons/react/24/outline'

import style from './UserIcon.module.css';

function UserIcon() {
  return (
    <div className={style.UserIcon}>
      <UserCircleIcon />
    </div>
  )
}

export { UserIcon };