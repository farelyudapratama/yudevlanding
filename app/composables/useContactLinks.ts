/**
 * Contact Links Composable
 * Manages WhatsApp and Email contact functionality
 */

export const useContactLinks = () => {
  // Contact Information
  const WHATSAPP_PHONE = '+6285959045569'
  const EMAIL = 'halo@yudev.my.id'

  /**
   * Generate WhatsApp link with message
   */
  const getWhatsAppLink = (message?: string) => {
    const encodedMessage = message ? encodeURIComponent(message) : ''
    const baseUrl = `https://wa.me/${WHATSAPP_PHONE}`
    return encodedMessage ? `${baseUrl}?text=${encodedMessage}` : baseUrl
  }

  /**
   * Open WhatsApp with optional message
   */
  const openWhatsApp = (message?: string) => {
    const link = getWhatsAppLink(message)
    window.open(link, '_blank')
  }

  /**
   * Open email with optional subject
   */
  const openEmail = (subject?: string) => {
    const mailtoLink = subject
      ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
      : `mailto:${EMAIL}`
    window.location.href = mailtoLink
  }

  /**
   * Handle contact button click (auto-detect type)
   */
  const handleContactClick = (type: 'whatsapp' | 'email', message?: string) => {
    if (type === 'whatsapp') {
      openWhatsApp(message)
    } else if (type === 'email') {
      openEmail(message)
    }
  }

  return {
    WHATSAPP_PHONE,
    EMAIL,
    getWhatsAppLink,
    openWhatsApp,
    openEmail,
    handleContactClick,
  }
}
