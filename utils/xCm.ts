export const isBrowser = () => typeof window !== 'undefined'

export const deviceType = () => {
  const ua = navigator.userAgent
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet'
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return 'mobile'
  }
  return 'desktop'
}

export const isMobile = () => deviceType() === 'mobile'
export const isTablet = () => deviceType() === 'mobile'

export function contextLogger<T, P>(name = '', type: T, payload: P) {
  if (process.env.REACT_APP_ENV === 'PRODUCTION') return
  console.group(`${name} Action Detail`)
  console.log(`Type: ${type}`)
  console.log('Payload: ', payload)
  console.groupEnd()
}
