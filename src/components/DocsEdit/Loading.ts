interface LoadingProps {
  $target: HTMLElement
  initialState: boolean
}

export default function Loading({ $target, initialState }: LoadingProps) {
  const $loading = document.createElement("div")
  $loading.classList.add("loading-icon")

  const $spinnerIcon = document.createElement("div")
  $spinnerIcon.classList.add("fa-1x")

  const $icon = document.createElement("i")
  $icon.classList.add("fas", "fa-spinner", "fa-pulse")
  $spinnerIcon.appendChild($icon)
  $loading.appendChild($spinnerIcon)

  $target.appendChild($loading)

  this.state = initialState

  this.setState = (nextState: boolean): void => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $loading.style.display = this.state ? "flex" : "none"
  }

  this.render()
}
