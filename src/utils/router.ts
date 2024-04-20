const ROUTE_CHANGE_EVENT_NAME: string = "route-change"

export const initRouter = (onRoute: VoidFunction): void => {
  window.addEventListener(ROUTE_CHANGE_EVENT_NAME, (e: Event) => {
    const { nextUrl } = (e as CustomEvent).detail

    if (nextUrl) {
      history.pushState(null, null, nextUrl)
      onRoute()
    }
  })
}

export const push = (nextUrl: string): void => {
  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGE_EVENT_NAME, {
      detail: {
        nextUrl,
      },
    }),
  )
}
