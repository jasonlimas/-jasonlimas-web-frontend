import './notification.scss'

export default function Notification({ isError, message }) {
  return (
      <div className={isError ? 'notificationError' : 'notificationSuccess'}>
          {message}
      </div>
  )
}
