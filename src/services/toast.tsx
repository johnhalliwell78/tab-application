import React from 'react'
import { toast } from 'react-toastify'
import {
  Check as CheckIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon,
} from 'react-feather'

const DEFAULT_TOAST_OPTS = {
  autoClose: 4000,
  position: toast.POSITION.BOTTOM_CENTER,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  draggable: false,
}

const SUCCESS = 'success'
const ERROR = 'error'
const WARN = 'warn'
const INFO = 'info'

interface ToastProps {
  content: any
  type?: string
}

const ToastMessage = (props: ToastProps) => {
  const { content, type } = props
  let icon = null
  if (type === SUCCESS) {
    icon = <CheckIcon className="toast-success-check-icon" />
  } else if (type === ERROR) {
    icon = <AlertCircleIcon className="toast-error-alert-icon" />
  } else if (type === WARN) {
    icon = <AlertCircleIcon className="toast-warn-alert-icon" />
  } else {
    // default to "info" level
    icon = <InfoIcon className="toast-info-icon" />
  }

  let title = ''

  if (typeof content === 'string') {
    title = content
  } else if (typeof content === 'object') {
    // this supports all of our current implementations of the
    // toast service that passes JSX like <p>some-text-here<p>
    title =
      content &&
        content.props &&
        content.props.children &&
        typeof content.props.children === 'string'
        ? content.props.children
        : ''
  }

  return (
    <div className="toast-row">
      {icon}
      <div className="toast-content" title={title}>
        {content}
      </div>
      {/* <XIcon className="toast-x-close-icon" /> */}
    </div>
  )
}

const toastService = {
  success: (content = 'Success!', opts = {}) => {
    const toastOpts = {
      ...DEFAULT_TOAST_OPTS,
      ...opts,
    }

    toast.success(<ToastMessage type={SUCCESS} content={content} />, toastOpts)
  },

  error: (content = 'Error!', opts = {}) => {
    const toastOpts = {
      ...DEFAULT_TOAST_OPTS,
      ...opts,
    }

    toast.error(<ToastMessage type={ERROR} content={content} />, toastOpts)
  },

  warn: (content = 'Warning!', opts = {}) => {
    const toastOpts = {
      ...DEFAULT_TOAST_OPTS,
      ...opts,
    }

    toast.warn(<ToastMessage type={WARN} content={content} />, toastOpts)
  },

  info: (content = 'Info!', opts = {}) => {
    const toastOpts = {
      ...DEFAULT_TOAST_OPTS,
      ...opts,
    }

    toast.info(<ToastMessage type={INFO} content={content} />, toastOpts)
  },

  dismiss: () => toast.dismiss(),
}

export default toastService
