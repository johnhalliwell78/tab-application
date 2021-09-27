import Swal from 'sweetalert2'

export const alertError = (errors: string[] | string) => {
  let errorMsg = ''
  if (Array.isArray(errors)) {
    errors.forEach((error: string) => {
      errorMsg += `<p>${error}</p>`
    })
  } else {
    errorMsg = errors
  }
  Swal.fire('Error!', errorMsg, 'error')
}
