import { useEffect } from 'react'

/** Per-page <title>. On WordPress this is the page title / Divi SEO field. */
export function usePageMeta(title: string) {
  useEffect(() => {
    document.title = `${title} | Blackfin Cloud Government`
    window.scrollTo(0, 0)
  }, [title])
}
