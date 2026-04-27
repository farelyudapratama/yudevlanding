type RevealOrigin = 'bottom' | 'top' | 'left' | 'right'

type RevealOptions = {
  delay: number
  duration: number
  distance: number
  origin: RevealOrigin
  easing: string
  once: boolean
  threshold: number
}

type BindingValue = Partial<RevealOptions>

const DEFAULT_OPTIONS: RevealOptions = {
  delay: 0,
  duration: 0.7,
  distance: 22,
  origin: 'bottom',
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  once: true,
  threshold: 0.2,
}

function normalizeOptions(value?: BindingValue): RevealOptions {
  return {
    ...DEFAULT_OPTIONS,
    ...(value ?? {}),
  }
}

function getOffset(origin: RevealOrigin, distance: number) {
  switch (origin) {
    case 'top':
      return { x: 0, y: -distance }
    case 'left':
      return { x: -distance, y: 0 }
    case 'right':
      return { x: distance, y: 0 }
    case 'bottom':
    default:
      return { x: 0, y: distance }
  }
}

function setInitialState(el: HTMLElement, options: RevealOptions) {
  const offset = getOffset(options.origin, options.distance)
  el.style.opacity = '0'
  el.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`
  el.style.willChange = 'opacity, transform'
}

function resetFinalState(el: HTMLElement) {
  el.style.opacity = '1'
  el.style.transform = 'none'
  el.style.willChange = 'auto'
}

function revealElement(el: HTMLElement, options: RevealOptions) {
  const animation = el.animate(
    [
      { opacity: 0, transform: el.style.transform },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    ],
    {
      duration: options.duration * 1000,
      delay: options.delay * 1000,
      easing: options.easing,
      fill: 'forwards',
    },
  )

  animation.addEventListener('finish', () => {
    resetFinalState(el)
  })
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, BindingValue>('reveal', {
    mounted(el, binding) {
      const options = normalizeOptions(binding.value)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (prefersReducedMotion) {
        resetFinalState(el)
        return
      }

      if (!('IntersectionObserver' in window)) {
        resetFinalState(el)
        return
      }

      setInitialState(el, options)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return
            }

            revealElement(el, options)

            if (options.once) {
              observer.unobserve(el)
              observer.disconnect()
            }
          })
        },
        { threshold: options.threshold },
      )

      observer.observe(el)
      ;(el as HTMLElement & { __revealObserver?: IntersectionObserver }).__revealObserver = observer
    },
    unmounted(el) {
      const revealEl = el as HTMLElement & { __revealObserver?: IntersectionObserver }
      revealEl.__revealObserver?.unobserve(el)
      revealEl.__revealObserver?.disconnect()
    },
  })
})