import { DocumentDetails } from "../../types.ts"
import { request } from "../../utils/api.ts"
import Editor from "./Editor.ts"
import EditorFooter from "./EditorFooter.ts"
import Loading from "./Loading.ts"

interface EditPageProps {
  $target: HTMLElement
  initialState: DocumentDetails
  onEdit: (data: { id: string; title: string; content: string }, loadingIcon: typeof Loading) => void
}

export default function EditPage({
  $target,
  initialState = {
    id: "",
    title: "",
    content: "",
  },
  onEdit,
}: EditPageProps) {
  const $page = document.createElement("div")
  $page.className = "edit-page"

  this.state = initialState

  const editor = new Editor({
    $target: $page,
    initialState: {
      title: "",
      content: "",
    },
    onEdit,
  })

  const editorFooter = new EditorFooter({
    $target: $page,
    initialState: {
      documents: [],
    },
  })

  this.setState = async (nextState) => {
    if (this.state.id !== nextState.id) {
      const newDoc = await fetchDocument(nextState.id)
      this.state = newDoc
    }

    editor.setState(
      this.state || {
        title: "",
        content: "",
      },
    )

    editorFooter.setState({
      ...editorFooter.state,
      documents: this.state.documents,
    })

    this.render()
  }

  this.render = () => {
    $target.appendChild($page)
  }

  const fetchDocument = async (id) => {
    if (id !== "new") {
      return await request(`/documents/${id}`, { method: "GET" })
    }
  }
}
