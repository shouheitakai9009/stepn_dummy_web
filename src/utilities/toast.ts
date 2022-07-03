import { toast, TypeOptions } from 'react-toastify'

export const notifySuccess = (content: string) => notify(content, "success")
export const notifyWarning = (content: string) => notify(content, "warning")
export const notifyError = (content: string) => notify(content, "error")

const notify = (content: string, type: TypeOptions) => {
  toast(content, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    type,
  })
}